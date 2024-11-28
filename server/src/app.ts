import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import { router } from './routes';
import { dbConnect } from './config';
import { ProductModel } from './models';
import { fillDataBase } from './services';

const PORT: string | number = process.env.SERVER_PORT || 4001;

const application = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 40,
});

const whitelist: string[] = [
  'https://shop-app-0eux.onrender.com',
  'https://shop-app-client-by56.onrender.com',
  'http://localhost:3000',
];

const corsConfig: cors.CorsOptions = {
  origin: (origin, cb) => {
    if (whitelist.indexOf(origin || '') !== -1 || !origin) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

application.use(limiter);
application.use(cors(corsConfig));
application.use(express.json());
application.use('/api', router);

dbConnect().then(() => {
  console.log('CONEXIÓN  EXITOSA CON LA BASE DE DATOS.');
  ProductModel.exists({})
    .then((exists) => {
      if (!exists) {
        fillDataBase();
      }
    })
    .catch((error) => console.error(error));
});

application.listen(PORT, () => {
  console.log(`EL INICIO DEL SERVIDOR EN EL PUERTO ${PORT} FUE UN EXITO`);
});

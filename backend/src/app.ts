import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { dbConnect } from './config';
import { ProductModel } from './models';
import { fillDataBase } from './services';

const PORT: string | number = process.env.SERVER_PORT || 4001;

const application = express();

const whitelist: string[] = ['http://localhost:3000'];

const corsConfig: cors.CorsOptions = {
  origin: (origin, cb) => {
    if (whitelist.indexOf(origin || '') !== -1 || !origin) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by CORS'));
    }
  },
};

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

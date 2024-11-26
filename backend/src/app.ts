import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { dbConnect } from './config';
import { fillDataBase } from './services';
import { ProductModel } from './models';

const PORT: string | number = process.env.PORT || 4001;

const application = express();

const whitelist: string[] = ['http://localhost:3000'];

const corsConfig: cors.CorsOptions = {
  origin: (origin, cb) => {
    if (whitelist.indexOf(origin ?? '') !== -1 || !origin) {
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
  console.log('Conexón exitosa con la DB.');
  ProductModel.exists({})
    .then((exists) => {
      // console.log('Hay elementos?', exists);
      if (!exists) {
        fillDataBase();
      }
    })
    .catch((error) => console.error(error));
});

application.listen(PORT, () => {
  console.log(`SERVIDOR LISTO EN EL PUERTO: ${PORT}`);
});

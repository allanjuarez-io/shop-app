import 'dotenv/config';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { corsOptions, dbConnect, limiter } from './config';
import { ProductModel } from './models';
import { fillDataBase } from './services';
import { SERVER_PORT } from './constants';

const application = express();
const environment = process.env.NODE_ENV || 'development';

dotenv.config({
  path: environment === 'production' ? '.env.production' : '.env',
});

application.use(limiter);
application.use(cors(corsOptions));
application.use(express.json());
application.use('/api', router);

dbConnect().then(() => {
  console.log('CONEXION A BASE DE DATOS.');
  ProductModel.exists({})
    .then((exists) => {
      if (!exists) {
        fillDataBase();
      }
    })
    .catch((error) => console.error(error));
});

application.listen(SERVER_PORT, () => {
  console.log(
    `SERVIDOR VINCULADO AL PUERTO ${SERVER_PORT} | TIPO DE ENTORNO: ${process.env.NODE_ENV}`
  );
});

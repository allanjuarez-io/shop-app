import cors from 'cors';
import { whitelist } from './allowed-origins.config';

export const corsOptions: cors.CorsOptions = {
  origin: (origin, cb) => {
    if (whitelist.indexOf(origin || '') !== -1 || !origin) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

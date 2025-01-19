import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import morgan from 'morgan';
import apiV1 from './api/v1/routes/main';
import logger from './api/v1/utils/logger';
import { connectDB } from './api/v1/utils/connectdb';
import { createServer } from 'http';

config();

const app = express();
const port = process.env.PORT || 4000;
const server = createServer(app);
const loggingFormat =
  process.env.NODE_ENV === 'production' ? 'combined' : 'dev';

app.use(express.json());
app.use(cors(
  {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }
));
app.use(morgan(loggingFormat));

connectDB()
  .then((res) => {
    server.listen(port, () => {
      logger.info(`${res} and Started running on port ${port}`);
    });
  })
  .catch((error) => logger.error(error));

app.use(express.static('public'));
app.use('/api/v1', apiV1);

export { server, app as default };

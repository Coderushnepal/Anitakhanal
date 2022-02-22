import http from 'http';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import router from './routes.js';
import logger from './utils/logger.js';

const server = express();

dotenv.config();

server.use(helmet());
server.use(morgan('tiny'));
server.use(bodyParser.json());

server.use(router);



// const PORT = 5454;

server.listen(process.env.PORT, () => {
    logger.info(`Listening on 127.0.0.1:${process.env.PORT}`);
  });



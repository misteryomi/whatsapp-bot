
import { Router } from 'express';
import botRouter from './search';
// import apiRouter from './api';
import webRouter from './web';

const v1Router = Router();
v1Router.use('/api/v1', botRouter);

export default v1Router;
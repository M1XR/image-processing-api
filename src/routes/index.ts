import express, { Request, Response } from 'express';
import image from './api/image';
import path from 'path';
import pageNotFound from '../middlware/pageNotFound';

const routes = express.Router();

routes.use('/image', image);

// handling status 404 Page not found
routes.use(pageNotFound);

export default routes;

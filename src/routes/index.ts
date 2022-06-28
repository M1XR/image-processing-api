import express from 'express';
import image from './api/image';
import pageNotFound from '../middlware/pageNotFound';

const routes = express.Router();

routes.use('/image', image);

// handling status 404-Page not found
routes.use(pageNotFound);

export default routes;

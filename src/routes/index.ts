import express, { Router } from 'express';
import image from './api/image';

const routes: Router = express.Router();

routes.use('/image', image);

export default routes;

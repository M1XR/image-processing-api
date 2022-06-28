import express, { Request, Response } from 'express';
import image from './api/image';
import path from 'path';

const routes = express.Router();

// send description File to Browser
routes.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../', 'server.html'));
});

routes.use('/image', image);

export default routes;

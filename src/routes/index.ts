import express from 'express';
import image from './api/image';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send(
    'For rezising Image, please use the following Endpoint, provided with filename, width and height: https://localhost:3000/api/image/'
  );
});

routes.use('/image', image);

export default routes;

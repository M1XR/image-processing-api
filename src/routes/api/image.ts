import express, { Router } from 'express';
import { verifyParameters, verifyFullFileExist, verifyThumbFileExist } from '../../middlware/validation';
import resizeImage from '../../middlware/resizeImage';

const image: Router = express.Router();

const validationMiddleware = [verifyParameters, verifyFullFileExist, verifyThumbFileExist];

image.use(validationMiddleware, resizeImage);

export default image;

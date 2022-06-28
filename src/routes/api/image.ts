import express, { Request, Response } from 'express';
import path from 'path';
import resize from '../../middlware/resize';
import * as fs from 'fs';
import pageNotFound from '../../middlware/pageNotFound';

const image = express.Router();

image.get('/', async (req: Request, res: Response) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  const pathThumbImg = path.join(
    __dirname,
    '../../../images/thumb',
    `${filename}_${width}x${height}.jpg`
  );
  try {
    if (fs.existsSync(pathThumbImg)) {
      res.sendFile(path.join(pathThumbImg));
    } else {
      await resize(filename, width, height);
      res.sendFile(path.join(pathThumbImg));
    }
  } catch (err) {
    pageNotFound(req, res);
  }
});

export default image;

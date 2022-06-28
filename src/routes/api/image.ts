import express, { Request, Response } from 'express';
import path from 'path';
import resize from '../../middlware/resize';
import * as fs from 'fs';
import pageNotFound from '../../middlware/pageNotFound';

const image = express.Router();

// GET request to process image
image.get('/', async (req: Request, res: Response) => {
  // assigning variables to correct type from request query
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  // path to processed image
  const pathThumbImg = path.join(
    __dirname,
    '../../../images/thumb',
    `${filename}_${width}x${height}.jpg`
  );

  try {
    // check if a processed image exists in thumb-folder
    if (fs.existsSync(pathThumbImg)) {
      // if exist then send the file from folder
      res.sendFile(path.join(pathThumbImg));
    } else {
      // if not exist then resize image and send from folder
      await resize(filename, width, height);
      res.sendFile(path.join(pathThumbImg));
    }
  } catch (err) {
    // catching error
    pageNotFound(req, res);
  }
});

export default image;

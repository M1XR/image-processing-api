import express, { Request, Response } from 'express';
import path from 'path';
import resize from '../../middlware/resize';

const image = express.Router();

const thumbFolder = '../../../images/thumb';

image.get('/', async (req: Request, res: Response) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  await resize(filename, width, height);

  res.sendFile(
    path.join(__dirname, thumbFolder, `${filename}_${width}x${height}.jpg`)
  );
});

export default image;

import { Request, Response } from 'express';
import sharp from 'sharp';
import path from 'path';

const resizeImage = async (req: Request, res: Response): Promise<void> => {
  const filename: string = req.query.filename as string;
  const width: number = Math.abs(parseInt(req.query.width as string));
  const height: number = Math.abs(parseInt(req.query.height as string));
  const pathFullImg: string = path.join(__dirname, '../../assets/images/full', `${filename}.jpg`);
  const pathThumbImg: string = path.join(__dirname, '../../assets/images/thumb', `${filename}_${width}x${height}.jpg`);

  try {
    await sharp(pathFullImg).resize(width, height).toFile(pathThumbImg);
    res.sendFile(pathThumbImg);
  } catch (err) {
    res.send(err);
  }
};

export default resizeImage;

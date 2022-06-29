import { Request, Response, NextFunction } from 'express';
import path from 'path';
import * as fs from 'fs';

export const verifyParameters = (req: Request, res: Response, next: NextFunction): void => {
  const filename: string | undefined =
    req.query.filename === undefined || req.query.filename === '' ? undefined : (req.query.filename as string);
  const width: string | undefined =
    req.query.width === undefined || req.query.width === '' ? undefined : (req.query.width as string);
  const height: string | undefined =
    req.query.height === undefined || req.query.height === '' ? undefined : (req.query.height as string);

  if (filename === undefined || width === undefined || height === undefined) {
    res.send(
      `Missing URL Parameters! Filename: ${filename === undefined ? 'missing' : filename}, Width: ${
        width === undefined ? 'missing' : width
      }, Height: ${height === undefined ? 'missing' : height}`
    );
  } else {
    next();
  }
};

export const verifyFullFileExist = (req: Request, res: Response, next: NextFunction): void => {
  const filename: string = req.query.filename as string;
  const pathToFile: string = path.join(__dirname, '../../assets/images/full', `${filename}.jpg`);

  if (fs.existsSync(pathToFile)) {
    next();
  } else {
    res.send(
      `A File with name ${filename}.jpg not exist in "root/assets/images/full/"! Please choose an existing File to process.`
    );
  }
};

export const verifyThumbFileExist = (req: Request, res: Response, next: NextFunction): void => {
  const filename: string = req.query.filename as string;
  const width: string = req.query.width as string;
  const height: string = req.query.height as string;
  const thumbImage = `${filename}_${width}x${height}.jpg`;
  const pathToThumbImage: string = path.join(__dirname, '../../assets/images/thumb', thumbImage);

  if (fs.existsSync(pathToThumbImage)) {
    res.sendFile(pathToThumbImage);
  } else {
    next();
  }
};

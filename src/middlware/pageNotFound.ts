import { Request, Response } from 'express';
import path from 'path';

// if a request failures with status 404 Page not fount
// send description File to Browser
const pageNotFound = (req: Request, res: Response) => {
  res.status(404);
  res.sendFile(path.join(__dirname, '../../', 'server.html'));
};

export default pageNotFound;

import { Request, Response } from 'express';
import path from 'path';

// handling 404 responses
// send a 404-Page to browser
const handling404 = (req: Request, res: Response): void => {
  try {
    res.sendFile(path.join(__dirname, '../../views/page404.html'));
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export default handling404;

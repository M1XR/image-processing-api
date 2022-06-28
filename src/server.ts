import express, { Application, Request, Response } from 'express';
import routes from './routes/index';
import path from 'path';
import pageNotFound from './middlware/pageNotFound';

const app: Application = express();
const port = 3000;

app.use('/api', routes);

// send description File to Browser
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../', 'server.html'));
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

// handling status 404 Page not found
app.use(pageNotFound);

export default app;

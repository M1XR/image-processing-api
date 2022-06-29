import express, { Application } from 'express';
import routes from './routes/index';
import handling404 from './middlware/handling404';

const app: Application = express();
const port = 3000;

app.use('/api', routes);

// handling 404 responses
app.use(handling404);

// start the express server
app.listen(port, (): void => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;

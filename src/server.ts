import express, { Application } from 'express';
import routes from './routes/index';
import pageNotFound from './middlware/pageNotFound';

const app: Application = express();
const port = 3000;

app.use('/api', routes);

// start the express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

// handling status 404-Page not found
app.use(pageNotFound);

export default app;

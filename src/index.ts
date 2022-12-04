import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
const port = process.env.PORT || 8080;

import connectDb from './config/database';
import routes from './routes';

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan('dev'));

connectDb();

routes(app);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
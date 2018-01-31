import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/crmRoutes';
import { mongoURI } from './config/database';

// database connection
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI)
  .then(() => console.log('Database connection successful'))
  .catch(err => console.log(err));

const app = express();
const port = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('It is working!');
});

// use routes
routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
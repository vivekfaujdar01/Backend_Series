import dotenv from 'dotenv';
import {app} from './app.js';
import connectDB from './db/index.js';import { connect } from 'mongoose';

dotenv.config({
    path: './src/.env',
});

const PORT = process.env.PORT || 3001;

connectDB()
  .then(() => {
    console.log('Database connected successfully');
    return app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });// Start the server after successful DB connection
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
  });



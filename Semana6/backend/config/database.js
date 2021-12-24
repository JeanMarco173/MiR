import mongoose from 'mongoose';
import ENV, { nodEnv } from './index.js';

const MONGO_URI = ENV[nodEnv].database.mongoUri;

const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

export const connectToDb = () => {
  mongoose.connect(MONGO_URI, options)
  const { connection } = mongoose;
  connection.once( 'open' , () => console.log('Connection stablished'.cyan.underline.bold));
  connection.on( 'error' , (err) => console.log('Something went wrong'.red.bold));
  return connection;
};


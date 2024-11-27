import 'dotenv/config';
import mongoose, { connect } from 'mongoose';

async function dbConnect(): Promise<void> {
  mongoose.set('strictQuery', false);
  const URI = <string>process.env.URI;
  await connect(URI);
}

export default dbConnect;

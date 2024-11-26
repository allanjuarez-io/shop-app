import 'dotenv/config';
import mongoose, { connect } from 'mongoose';

// mongodb+srv://edgarjuarez:<db_password>@cluster0.ty9jh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

async function dbConnect(): Promise<void> {
  mongoose.set('strictQuery', false);
  const URI = <string>process.env.URI;
  await connect(URI);
}

export default dbConnect;

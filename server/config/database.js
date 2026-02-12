import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`🍃 MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    console.log('💡 Make sure to update your .env file with a valid MongoDB connection string!');
    console.log('📖 See README.md for MongoDB Atlas setup instructions.');
    process.exit(1);
  }
};

export default connectDB;
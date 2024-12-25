import mongoose from 'mongoose'; // Import mongoose for MongoDB connection

// Export an asynchronous function to connect to MongoDB
export const connectDB = async () => {
  try {
    // MongoDB connection string from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`); // Log successful connection
  } catch (error) {
    console.error(`Error: ${error.message}`); // Log any errors
    process.exit(1); // Exit the process with a failure code
  }
};

// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect('mongo://mongoadmin:mongoadmin@mongo:2701', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;


// mongodb://localhost:27017/notesDB
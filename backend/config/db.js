import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost/devdrip",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// mongoose.connect(
//         process.env.MONGO_URI || "mongodb://localhost/devdrip",
//         {
//           useUnifiedTopology: true,
//           useNewUrlParser: true,

//         }
//       );

// export default mongoose.connection;

export default connectDB;

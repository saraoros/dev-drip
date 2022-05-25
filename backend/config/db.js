import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/devdrip", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});



// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(
//       process.env.MONGO_URI || "mongodb://localhost/devdrip",
//       {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,

//       }
//     );

//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };
export default mongoose.connection;
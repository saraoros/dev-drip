const mongoose = require("mongoose");

require("dotenv").config("./.env");
console.log("connecting to mongodb", process.env.MONGODB_URI);
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/devdripdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;

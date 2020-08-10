const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config("../");

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connect to MongoDB");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectMongo;

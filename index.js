const express = require("express");
const connectMongo = require("./mongodb/index");
const cors = require("cors");

const StartServer = async () => {
  const app = express();

  // Connect to database
  await connectMongo();

  app.use(express.json());
  app.use(cors());

  // Define Routes
  app.use("/", require("./routes/index"));
  app.use("/api/url", require("./routes/getPreview"));
  app.use("/api/url", require("./routes/url"));

  const PORT = 5000;

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

StartServer();

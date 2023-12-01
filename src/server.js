const http = require("http");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const app = require("./app");
const cors = require("cors");

dotenv.config({
  path: path.join(__dirname, "config", ".env"),
});

const port = process.env.PORT || 5004;

app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

const server = http.createServer(app);

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
  server.listen(port, () => {
    console.log(`http://localhost:${port} running`);
  });
});

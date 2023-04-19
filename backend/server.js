const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/todoRoutes.js");

require("dotenv").config();

const app = express();

const PORT = process.env.port || 3001;

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log("Running"));

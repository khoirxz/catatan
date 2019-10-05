const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const Routes = express.Router();

const SchemaModel = require("./Log.models");

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

const URI =
  "mongodb+srv://dhemit:dhemit@cluster0-ukvsk.gcp.mongodb.net/catatan?retryWrites=true&w=majority";
const mognoDB = process.env.MONGODB_URI || URI;
mongoose.connect(mognoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection Error"));

Routes.route("/").get((req, res) => {
  SchemaModel.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.use("/log", Routes);

app.listen(port, () => {
  console.log("server is running");
});

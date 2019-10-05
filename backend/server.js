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

Routes.route("/add").post((req, res) => {
  let todo = new SchemaModel(req.body);

  console.log(todo);
  todo
    .save()
    .then(result => {
      res.status(200).json({ todo: "Catatan ditambahkan" });
    })
    .catch(err => {
      res.status(400).send({
        pesan: "gagal menambahkan",
        status: "fail"
      });
    });
});

Routes.route("/:id").get((req, res) => {
  let id = req.params.id;

  SchemaModel.findById(id, (err, result) => {
    res.json(result);
  });
});

Routes.route("/update/:id").post((req, res) => {
  SchemaModel.findById(req.params.id, (err, result) => {
    if (!result) {
      res.status(400).send("Data tidak ditemukan");
    } else {
      result.title = req.body.title;
      result.description = req.body.description;
      result.date = req.body.date;
      result.completed = req.body.completed;

      result
        .save()
        .then(data => {
          res.json("Catatan terupdate");
        })
        .catch(err => {
          res.status(400).send("Gagal mengupate Data");
        });
    }
  });
});

app.use("/log", Routes);

app.listen(port, () => {
  console.log("server is running");
});

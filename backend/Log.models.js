const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchemaModel = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  completed: { type: Boolean }
});

module.exports = mongoose.model("Catatan", SchemaModel);

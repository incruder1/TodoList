const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  }, 
   desc: {
    type: String,
    required: true,
  } 
});

module.exports = mongoose.model("ToDo", toDoSchema);
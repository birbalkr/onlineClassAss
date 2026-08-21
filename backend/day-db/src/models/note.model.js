const { default: mongoose } = require("mongoose");

let noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const NoteModel = mongoose.model("note", noteSchema);

module.exports = NoteModel;

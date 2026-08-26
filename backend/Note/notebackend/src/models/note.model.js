const { default: mongoose } = require("mongoose");

let noteSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
  },
});

const NoteModel = mongoose.model("note", noteSchema);

module.exports = NoteModel;

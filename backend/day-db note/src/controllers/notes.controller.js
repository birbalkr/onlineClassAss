const NoteModel = require("../models/Note.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let Newnote = await NoteModel.create({ title, description });

    return res.send(201).json({
      status: "success",
      massage: "Note created successfully",
      data: Newnote,
    });
  } catch (error) {
    console.log("error in  creation", error);
  }
};


module.exports = { createNotesController };

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

const getAllNotesController = async (req, res) => {
  try {
    const allNotes = await NoteModel.find();

    res.status(200).json({
      status: "success",
      message: "All notes fetched successfully",
      data: allNotes,
    });
  } catch (error) {
    console.log("error in get notes api", error);
  }
};
module.exports = { createNotesController, getAllNotesController };

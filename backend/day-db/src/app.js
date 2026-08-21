const connectdb = require("./config/db");
const express = require("express");
const NoteModel = require("./models/Note.model");
const app = express();

app.use(express.json());

connectdb();

app.get("/", (req, res) => {
  res.send("Done");
});

app.post("/create", async (req, res) => {
  let { title, description } = req.body;

  const Newnote = await NoteModel.create({ title, description });

  res.send({
    status: "success",
    massage: "Note created successfully",
    data: Newnote,
  });
});

module.exports = app;

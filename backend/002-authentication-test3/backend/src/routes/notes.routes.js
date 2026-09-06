import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notes.controller.js";

const notesRoutes = express.Router();


notesRoutes.get("/allNotes", getAllNotes);

notesRoutes.post("/create", createNote);

notesRoutes.delete("/delete", deleteNote);

notesRoutes.put("/update", updateNote);








export default notesRoutes;
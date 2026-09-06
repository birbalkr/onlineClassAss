import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notes.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const notesRoutes = express.Router();


notesRoutes.get("/allNotes",authMiddleware, getAllNotes);

notesRoutes.post("/create",authMiddleware, createNote);

notesRoutes.delete("/delete/:id", deleteNote);

notesRoutes.put("/update", updateNote);








export default notesRoutes;
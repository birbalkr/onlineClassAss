const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getNoteByIdController,
} = require("../controllers/notes.controller");

const router = express.Router();

router.post("/create", createNotesController);
router.get("/getall", getAllNotesController);
router.get("/:id", getNoteByIdController);

module.exports = router;

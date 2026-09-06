import notesModel from "../models/notes.models.js";

export const createNote = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                message: "Title and description are required",
            });
        }

        const note = await notesModel.create({
            title,
            description,
            user: req.user.id,
        });

        return res.status(201).json({
            message: "Note created successfully",
            note,
        });
    } catch (error) {
        console.error("Create note error:", error);

        return res.status(500).json({
            message: "Failed to create note",
        });
    }
};

export const getAllNotes = async (req, res) => {
    try {
        const userId = req.user.id;
        const notes = await notesModel.find({ user: userId });
        console.log(notes);


        return res.status(200).json({
            message: "Notes fetched successfully",
            notes,
        });


    } catch (error) {
        console.error("get all note error:", error);

        return res.status(500).json({
            message: "Failed to create note",
        });
    }
}

export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;

        const note = await notesModel.findByIdAndDelete(id);
        if (!note) {
            return res.status(404).json({
                message: "Note not found",
            });
        }

        return res.status(200).json({
            message: "Note deleted successfully",
        });
    } catch (error) {
        console.error("Delete note error:", error);

        return res.status(500).json({
            message: "Failed to delete note",
        });
    }
}

export const updateNote = async (req, res) => { }

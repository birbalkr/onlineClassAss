import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40
    },

    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1000
    }
});


const notesModel = mongoose.model("Notes", notesSchema);
export default notesModel;
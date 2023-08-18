import { Schema, model } from "mongoose";

const noteSchema = new Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    content: { type: String },
    user_id: {
        type: String,
        required: true,
    }
})

export default model('Note', noteSchema);
const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Teacher = mongoose.model("teacher", teacherSchema);

export default Teacher;
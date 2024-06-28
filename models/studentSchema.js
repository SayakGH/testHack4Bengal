const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    address: {
        type: Number,
        required: true
    }
});

const Student = mongoose.model("student", studentSchema);
export default Student;
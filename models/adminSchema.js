const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    schoolName: {
        type: String,
        unique: true,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    studentCode: {
        type: String,
        required: flase,
    },
    teacherCode: {
        type: String,
        required: flase,
    }
});

const Admin  = mongoose.model("admin", adminSchema);
export default Admin;
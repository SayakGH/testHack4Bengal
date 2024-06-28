const mongoose = require("mongoose");

const sclassSchema = new mongoose.Schema({
    sclassName: {
        type: String,
        required: true,
    },
    schoolName: {
        type: String,
        required: true
    },
    assignedAddress: {
        type: String,
        default:null,
        required: false
    },
}, { timestamps: true });

const Sclass= mongoose.model("sclass", sclassSchema);
export default Sclass;
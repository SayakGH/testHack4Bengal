import Admin from "../models/adminSchema";
import Teacher from "../models/teacherSchema";
import Student from "../models/studentSchema";

export const adminLogIn = async (req, res) => {
    if (req.body.address) {
        let admin = await Admin.findOne({ address: req.body.address });
        if (admin) {
            res.send(admin);
        } else {
            res.send({ message: "User not found" });
        }
    } else {
        res.send({ message: "wallet address required" });
    }
};

export const studentLogIn = async (req, res) => {
    if (req.body.address) {
        let student = await Student.findOne({ address: req.body.address });
        if (student) {
            res.send(student);
        } else {
            res.send({ message: "User not found" });
        }
    } else {
        res.send({ message: "wallet address required" });
    }
};

export const teacherLogIn = async (req, res) => {
    if (req.body.address) {
        let teacher = await Teacher.findOne({ address: req.body.address });
        if (teacher) {
            res.send(teacher);
        } else {
            res.send({ message: "User not found" });
        }
    } else {
        res.send({ message: "wallet address required" });
    }
};
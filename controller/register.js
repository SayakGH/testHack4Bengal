import Admin from "../models/adminSchema";
import Teacher from "../models/teacherSchema";
import Student from "../models/studentSchema";
import bcrypt from "bycrypt";

const saltRounds = 10;

function generateUniqueId() {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                reject(err);
            } else {
                resolve(salt);
            }
        });
    });
}


export const adminRegister = async (req, res) => {
    try {
        
        const admin = new Admin({
            ...req.body
        });//sending -- name ,email,schoolName, address
        
        const existingAdminByEmail = await Admin.findOne({ email: req.body.email });
        const existingSchool = await Admin.findOne({ schoolName: req.body.schoolName });
        const existingWallet = await Admin.findOne({ schoolName: req.body.address});


        if (existingAdminByEmail) {
            res.send({ message: 'Email already exists' });
        }
        else if (existingSchool) {
            res.send({ message: 'School name already exists' });
        }
        else if(existingWallet){
            res.send({ message: 'wallet already exixts' })
        }
        else {
            const id1 = await generateUniqueId();
            const id2 = await generateUniqueId();
            admin.studentCode= id1;
            admin.teacherCode=id2;
            let result = await admin.save();
            res.send(result);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

export const studentRegister = async (req, res) => {
    try {
        
        const student = new Student({
            ...req.body
        });//sending -- name ,email,uid,address
        
        const existingStudentByEmail = await Student.findOne({ email: req.body.email });
        const existingWallet = await Student.findOne({ schoolName: req.body.saddress});
        const uidd = await Admin.findOne({ schoolCode: req.body.uid});
        if(uidd){
        if (existingStudentByEmail) {
            res.send({ message: 'Email already exists' });
        }
        else if(existingWallet){
            res.send({ message: 'wallet already exixts' })
        }
        else {
            let result = await admin.save();
            res.send(result);
        }
        }
        else{
            res.send({ message: 'invalid uid' })
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

export const teacherRegister = async (req, res) => {
    try {
        
        const student = new Student({
            ...req.body
        });//sending -- name ,email,uid,address
        
        const existingStudentByEmail = await Teacher.findOne({ email: req.body.email });
        const existingWallet = await Teacher.findOne({ schoolName: req.body.saddress});
        const uidd = await Admin.findOne({ schoolCode: req.body.uid});
        if(uidd){
        if (existingStudentByEmail) {
            res.send({ message: 'Email already exists' });
        }
        else if(existingWallet){
            res.send({ message: 'wallet already exixts' })
        }
        else {
            let result = await Admin.save();
            res.send(result);
        }
        }
        else{
            res.send({ message: 'invalid uid' })
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

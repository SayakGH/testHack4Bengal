import Sclass from "../models/classSchema"

export const sclassCreate = async (req, res) => {
    try {
        const sclass = new Sclass({
            sclassName: req.body.sclassName,
            schoolName: req.body.schoolName
        });

        const existingSclassByName = await Sclass.findOne({
            sclassName: req.body.sclassName,
            school: req.body.schoolName
        });

        if (existingSclassByName) {
            res.send({ message: 'Sorry this class name already exists' });
        }
        else {
            const result = await sclass.save();
            res.send(result);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

export const sclassList = async (req, res) => {
    try {
        let sclasses = await Sclass.find({ school: req.body.schoolName })
        if (sclasses.length > 0) {
            res.send(sclasses)
        } else {
            res.send({ message: "No sclasses found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

export const deleteSclass = async (req, res) => {
    try {
        const deletedClass = await Sclass.findOne({schoolName: req.body.schoolName, sclassName: req.body.schoolName});
        if (!deletedClass) {
            return res.send({ message: "Class not found" });
        }
        res.send(deletedClass);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteSclasses = async (req, res) => {
    try {
        const deletedClasses = await Sclass.deleteMany({ schoolName: req.body.schoolName });
        if (deletedClasses.deletedCount === 0) {
            return res.send({ message: "No classes found to delete" });
        }
        res.send(deletedClasses);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const sclassAssign = async (req,res)=>{
    try {
        const sclass = await Sclass.findOne({schoolName: req.body.schoolName, sclassName: req.body.schoolName});
        if(sclass.assignedAddress=== null){
            sclass.assignedAddress=req.body.Address;
            const result = await sclass.save();
            res.send(result);
        }
        else{
            return res.send({ message: "class already assigned" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};



import express from "express"
import {adminRegister, studentRegister, teacherRegister} from "../controller/register"
import {adminLogIn, teacherLogIn,studentLogIn} from "../controller/login"

const router = express.router();

router.post("/admin/register",adminRegister);
router.post("/teacher/register",teacherRegister);
router.post("/student/register",studentRegister);

router.post("/student/login",studentRegister);
router.post("/admin/login",adminLogIn);
router.post("/teacher/login",teacherLogIn);


module.exports = router;

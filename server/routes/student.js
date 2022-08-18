import  express  from "express";
import { getstudents } from "../controllers/student.js";
import student from "../models/student.js";
import { createstudent } from "../controllers/student.js";
import { deletestudent } from "../controllers/student.js";

const router= express.Router();
router.get("/", getstudents);
router.post('/',createstudent);
router.delete('/:id',deletestudent);
export default router;
import express from 'express';
import { addEmployee, deleteEmployee, editEmployee, getAllEmployee, getEmployeeById } from '../controllers/employeeController.js';
const router =express.Router();
router.get("/getemployees",getAllEmployee);
router.get("/getemployeebyid/:id",getEmployeeById);
router.post("/createemployee",addEmployee);
router.delete("/deleteemployee/:id",deleteEmployee);
router.put("/editemployee/:id",editEmployee);
export default router;
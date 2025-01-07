import express from "express"
// import { getAllEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee } from "../controllers/EmpController.js"
import Services from "../controllers/EmpController.js"

const router = express.Router()

router.get("/emp", Services.getAllEmployees)
router.get("/emp/:id", Services.getEmployeeById)
router.post("/addemp", Services.addEmployee)
router.put("/updateemp/:id", Services.updateEmployee)
router.delete("/deleteemp/:id", Services.deleteEmployee)

export default router
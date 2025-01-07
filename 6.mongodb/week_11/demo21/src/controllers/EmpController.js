import empModel from "../models/EmpModel.js";

const EmployeeServices = {
    getAllEmployees : async (req, res) => {
        try {
            const employees = await empModel.find();
            res.json({ "err": 0, "empdata": employees });
        }
        catch (err) {
            res.json({ "err": 1, "msg": "Something went wrong" })
        }
    },
    
    getEmployeeById : async (req, res) => {
        try {
            let id = req.params.id;
            const employee = await empModel.findById(id);
            res.json({ "err": 0, "empdata": employee });
        }
        catch (err) {
            res.json({ "err": 1, "msg": "Something went wrong" })
        }
    },
    
    addEmployee : async (req, res) => {
        const newEmployee = req.body;
        // console.log("add employee data: ", newEmployee)
        const employee = new empModel(newEmployee);
        try {
            const save = await employee.save();
            res.json({ "err": 0, "msg": "Employee added successfully" })
        }
        catch (err) {
            res.json({ "err": 1, "msg": "Already exists or something went wrong" })
        }
    },
    
    updateEmployee : async (req, res) => {
        try {
            let id = req.params.id;
            let bodydata = req.body;
            const upemployee = await empModel.findByIdAndUpdate(id, bodydata);
            if (!upemployee) {
                return res.json({ "err": 1, "msg": `Employee with ${id} not found ` })
            }
            res.json({ "err": 0, "msg": "employee updated" });
        }
        catch (err) {
            res.json({ "err": 1, "msg": "Something went wrong" })
        }
    },
    
    deleteEmployee : async (req, res) => {
        console.log("deleting employee")
        try {
            let id = req.params.id;
            const employee = await empModel.findByIdAndDelete(id);
            if (!employee) {
                return res.json({ "err": 1, "msg": `Employee with ${id} not found ` })
            }
            res.json({ "err": 0, "msg": "employee deleted" });
        }
        catch (err) {
            res.json({ "err": 1, "msg": "Something went wrong" })
        }
    }
}

export default EmployeeServices

// const getAllEmployees = async (req, res) => {
//     try {
//         const employees = await empModel.find();
//         res.json({ "err": 0, "empdata": employees });
//     }
//     catch (err) {
//         res.json({ "err": 1, "msg": "Something went wrong" })
//     }
// }

// const getEmployeeById = async (req, res) => {
//     try {
//         let id = req.params.id;
//         const employee = await empModel.findById(id);
//         res.json({ "err": 0, "empdata": employee });
//     }
//     catch (err) {
//         res.json({ "err": 1, "msg": "Something went wrong" })
//     }
// }

// const addEmployee = async (req, res) => {
//     const newEmployee = req.body;
//     // console.log("add employee data: ", newEmployee)
//     const employee = new empModel(newEmployee);
//     try {
//         const save = await employee.save();
//         res.json({ "err": 0, "msg": "Employee added successfully" })
//     }
//     catch (err) {
//         res.json({ "err": 1, "msg": "Already exists or something went wrong" })
//     }
// }

// const updateEmployee = async (req, res) => {
//     try {
//         let id = req.params.id;
//         let bodydata = req.body;
//         const upemployee = await empModel.findByIdAndUpdate(id, bodydata);
//         if (!upemployee) {
//             return res.json({ "err": 1, "msg": `Employee with ${id} not found ` })
//         }
//         res.json({ "err": 0, "msg": "employee updated" });
//     }
//     catch (err) {
//         res.json({ "err": 1, "msg": "Something went wrong" })
//     }
// }

// const deleteEmployee = async (req, res) => {
//     console.log("deleting employee")
//     try {
//         let id = req.params.id;
//         const employee = await empModel.findByIdAndDelete(id);
//         if (!employee) {
//             return res.json({ "err": 1, "msg": `Employee with ${id} not found ` })
//         }
//         res.json({ "err": 0, "msg": "employee deleted" });
//     }
//     catch (err) {
//         res.json({ "err": 1, "msg": "Something went wrong" })
//     }
// }

// export { getAllEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee };
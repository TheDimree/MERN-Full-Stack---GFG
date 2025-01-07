import { validationResult } from "express-validator"

export const userSignIn = (req, res) => {
    console.log("signing in")
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        console.log(errors.array())
        return res.status(400).json({ err: 1, msg: "Validation failed", errors: errors.array() });
    }
    let postData = req.body
    console.log(postData)
    res.json({"err": 0, "msg": "User logged in successfully"})    
    
}
export const userSignUp = (req, res) => {
    let postData = req.body;
    console.log(postData)
    res.json({"err": 0, "msg": "User registered successfully"})
}
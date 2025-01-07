import User from "../models/UsersModel.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import appConfig from "../config/appConfig.js";

const login = async (req, res) => {
    console.log("Logging in")
    try {
        let {name, password} = req.body
        let user = await User.findOne({name:name})
        if(!user) {
            return res.status(404).json({message: "User not found"})
        }

        let isMatch = bcrypt.compareSync(password, user.password);
        if(!isMatch) {
            return res.status(400).json({"message": "Invalid credentials"})
        }

        //* Creating Token
        let data = {
            name : user.name,
            role: user.role,
        }
        console.log("data: ", data);
        const token = jwt.sign(data, appConfig.TOKEN_SECRET, {expiresIn: '1h'})

        return res.status(200).json({"message":"Login successfully with token = "+token})



    } catch(err) {
        res.json({"err": 1, "message": "Error = "+ err.message})
    }
}

const register = async (req, res) => {
    try {
        let userData = req.body;
        let salt = bcrypt.genSaltSync(10);
        // userData.password = hashedPassword;
        userData.password = bcrypt.hashSync(userData.password, salt);
        let newUser = new User(userData);
        await newUser.save();
        res.json({"err": 0, "message": "User registered successfully."})
    } catch(err) {
        res.json({"err": 1, "message": "Something went wrong or already exits."})
        console.log(err)
    }
}

export {login, register}
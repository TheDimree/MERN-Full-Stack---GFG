import AuthModel from "../models/AuthModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const salt = bcrypt.genSaltSync(10);
const Login=async (req,res)=>{
   try{
     let {email,password}=req.body;
     let user=await AuthModel.findOne({email:email});
     if(!user){
        return res.json({"err":1,"msg":"Enter correct email or password"});
     }
     if(bcrypt.compareSync(password,user.password)){
        let payload={
           fullName:`${user.firstName} ${user.lastName}`,
           email:user.email,
           role:user.role
        }
        let token=jwt.sign(payload,process.env.CLIENT_SECRET,{expiresIn:'1h'});
        return res.json({"err":0,"msg":"Login Success","token":token});
     }
     else{
        return res.json({"err":1,"msg":"Enter correct email or password"});
     }
   }
   catch(err){
    res.json({"err":1,"msg":"Enter correct email or password"});
   }
}
const Register=async (req,res)=>{
    try{
        let userData=req.body;
        userData.password=bcrypt.hashSync(userData.password, salt);
        let user=new AuthModel(userData);
        await user.save();
        res.json({"err":0,"msg":"User registerd successfully"})
    }
    catch(err){
        res.json({"err":1,"msg":"Something went wrong or already exists"});
    }
}
export {Login,Register}
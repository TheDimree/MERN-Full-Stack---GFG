import User from "../models/UserModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const TOKEN_SECRET="09f26e402586e2faa8da4c98a35f1b20d6b033c6";
const login=async (req,res)=>{
    try{
       let {email,password}=req.body;
       let user= await User.findOne({email});
       if(!user){
        return  res.json({"err":1,"msg":"Invalid credentials"});
       }
       //compare password
       const isMatch=await bcrypt.compare(password,user.password); 
       if(!isMatch){
        return  res.json({"err":1,"msg":"Invalid credentials"});
       }
       //create token 
       let data={
          fullName:`${user.firstName} ${user.lastName}`,
          email:email,
          role:user.role
       }
        const token=jwt.sign(data,TOKEN_SECRET,{expiresIn:'1h'})
        res.json({"err":0,"msg":"Login Success","token":token});
    }
    catch(err){
        res.json({"err":1,"msg":"Something went wrong or Invalid credentials"});
    }
}
const register=async (req,res)=>{
    try{
       let userdata=req.body;
       let salt = bcrypt.genSaltSync(10);
        userdata.password=bcrypt.hashSync(userdata.password,salt);//hash password
       let newuser=new User(userdata);
       await newuser.save();
       res.json({"err":0,"msg":"User Created"})
    }
    catch(err){
        res.json({"err":1,"msg":"Something went wrong or already exists"});
    }
}
export {login,register};
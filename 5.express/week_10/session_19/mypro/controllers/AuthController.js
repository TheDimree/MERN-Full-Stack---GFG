import jwt from 'jsonwebtoken';
const SignIn=(req,res)=>{
     let {email,password}=req.body;
     if(email==="abc@gmail.com" && password==="12345")
     {
        let data={
            email:email
        }
        let token=jwt.sign(data,process.env.TOKEN_SECRET,{expiresIn:'1h'})
        res.json({"err":0,"msg":"Login Successfully","_token":token});
     }
     else{
        res.json({"err":1,"msg":"Email or Password is not correct"});
     }
}
const SignUp=(req,res)=>{
    let newUserData=req.body;
    if(newUserData){
       res.json({"err":0,"msg":"User Registered"});
    }
    else{
        res.json({"err":1,"msg":"Already exists or something went wrong"});
    }
}
export {SignIn,SignUp}
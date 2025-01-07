import React,{useState} from 'react'
import { Container, Box, Typography, Avatar, TextField, Button, Link,Alert  } from '@mui/material';
import LockOutlined from '@mui/icons-material/LockOutlined'
import { signUp } from './services/AuthService';
import {useNavigate} from 'react-router-dom'
const Register = () => {
    const [state,setState]=useState({firstName:'',lastName:'',email:'',password:'',mobile:''});
    const [errMsg,setErrMsg]=useState('');
    const navigate=useNavigate();
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setState({...state,[name]:value});
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        signUp(state)
        .then(res=>{
             if(res.data.err==0){
                alert(res.data.msg);
                navigate("/");
             }
             if(res.data.err==1){
               setErrMsg(res.data.msg)
             }

        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{
          marginTop:8,
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          bgcolor:"#f5f5f5",
          padding:"30px"
      }}>
           <Avatar sx={{m:1,bgcolor:"secondary.main"}}>
              <LockOutlined />
           </Avatar>
           <Typography component="h1" variant="h5">
              Sign Up
           </Typography>
           {errMsg!='' && <Alert severity="error"> {errMsg} </Alert>}
           <Box component="form" sx={{mt:1}}  onSubmit={handleSubmit}>
           <TextField margin='normal' fullWidth id='firstName' label="First Name" required name='firstName' autoComplete='firstName' autoFocus onChange={handleChange}/>
           <TextField margin='normal' fullWidth id='lastName' label="Last Name" required name='lastName' autoComplete='lastName' autoFocus onChange={handleChange}/>
                <TextField margin='normal' fullWidth id='email' label="Email Address" required name='email' autoComplete='email' autoFocus onChange={handleChange}/>
                <TextField margin='normal' fullWidth id='password' label="Password" required name='password' autoComplete='current-password' type='password' autoFocus onChange={handleChange}/>
                <TextField margin='normal' fullWidth id='mobile' label="Mobile" required name='mobile' autoComplete='mobile' autoFocus onChange={handleChange}/>
                <Button type='submit' fullWidth sx={{mt:3,mb:2}} variant='contained'> Sign Up</Button>
                <Link href="/" sx={{display:'block',textAlign:"center"}}> Login Here</Link>
           </Box>
      </Box>
    </Container>
  )
}

export default Register
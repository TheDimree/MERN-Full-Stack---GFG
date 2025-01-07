import React,{useState} from 'react'
import { Container, Box, Typography, Avatar, TextField, Button, Link,Alert  } from '@mui/material';
import LockOutlined from '@mui/icons-material/LockOutlined'
import { signUp } from './services/AuthService';
import {useNavigate} from 'react-router-dom'
import { saveProduct } from './services/ProductService';
const Addproduct = () => {
    const [state,setState]=useState({pname:'',price:'',features:'',itemsQuantity:'',category:'',imagePath:''});
    const [errMsg,setErrMsg]=useState('');
    const navigate=useNavigate();
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setState({...state,[name]:value});
    }
    const handleImage=(event)=>{
      if(event.target.files.length>0){
        setState({...state,imagePath:event.target.files[0]});
      }
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(state.imagePath!=''){
           if(state.imagePath.type==="image/jpeg" || state.imagePath.type==="image/jpg" || state.imagePath.type==="image/png" || state.imagePath.type==="image/gif"){
              //if we send the data to the server with attachment we send with FormsData 
              let formData=new FormData();
              formData.append('pname',state.pname);
              formData.append('itemsQuantity',state.itemsQuantity);
              formData.append('price',state.price);
              formData.append('category',state.category);
              formData.append('features',state.features);
              formData.append('att',state.imagePath);
              saveProduct(formData)
              .then(res=>{
                  console.log(res.data)
              })
              .catch(err=> console.log(err))
           }
           else{
              setErrMsg("Only suppory jpg | png | gif images!")
           }
        }
        else{
          setErrMsg("Please select image!")
        }
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
          
           <Typography component="h1" variant="h5">
              Add Product
           </Typography>
           {errMsg!='' && <Alert severity="error"> {errMsg} </Alert>}
           <Box component="form" sx={{mt:1}}  onSubmit={handleSubmit}>
           <TextField margin='normal' fullWidth id='pname' label="Product Name" required name='pname' autoComplete='pname' autoFocus onChange={handleChange}/>
           <TextField margin='normal' fullWidth id='category' label="Category" required name='category' autoComplete='category' autoFocus onChange={handleChange}/>
           <TextField margin='normal' fullWidth id='price' label="Price" required name='price' autoComplete='price' autoFocus onChange={handleChange}/>
           <TextField margin='normal' fullWidth id='itemsQuantity' label="Quantity" required name='itemsQuantity' autoComplete='itemsQuantity' autoFocus onChange={handleChange}/>
                <TextField margin='normal' fullWidth id='features' label="Features" required name='features' autoComplete='features' autoFocus onChange={handleChange}/>
                <TextField margin='normal' fullWidth id='att' label="Image" required name='att' autoComplete='att' type='file' autoFocus onChange={handleImage}/>
              
                <Button type='submit' fullWidth sx={{mt:3,mb:2}} variant='contained'> Add Product</Button>
               
           </Box>
      </Box>
    </Container>
  )
}

export default Addproduct
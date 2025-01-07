import express from 'express';
import mydb from './db.js';
import empmodel from './models/empModel.js';
import mongoose from 'mongoose';
const PORT = 9999;
const app = express();
mydb();
//insert data 
let empCreate = async () => {
    try {
        let newEmpdata = {
            firstName: 'sumit',
            lastName: 'joshi',
            email: 'sumit@gmail.com',
            age: 36
        }
        let emp = new empmodel(newEmpdata);
        await emp.save();
        console.log("Employee added")
    }
    catch (err) {
        console.log("Employee added eror or already exists")
    }
}
// empCreate(); 
const fetchEmployee=async()=>{
    try{
        let empData=await empmodel.find().lean();
        console.log(empData)
    }  
    catch(err){
        console.log("Some error occur to fetch employee")
    }
}
fetchEmployee();
const autherSchema=new mongoose.Schema({
    name:String,
    bio:String
 })
 const bookSchema=new mongoose.Schema({
    title:String,
    author:{type:mongoose.Schema.Types.ObjectId, ref:'Author'}
 })
 const Author=mongoose.model('Author',autherSchema)
 const Book=mongoose.model('Book',bookSchema)
 let authorCreate = async () => {
    try {
        let newEmpdata = {
            name:'amit',
            bio:'bla'
        }
        let emp = new Author(newEmpdata);
        await emp.save();
        console.log("Author added")
    }
    catch (err) {
        console.log("Author added eror or already exists")
    }
}
//authorCreate();
let bookCreate = async () => {
    try {
        let newEmpdata = {
            title:'English Book',
            author:'675d4e323e403703dedcd197'
        }
        let emp = new Book(newEmpdata);
        await emp.save();
        console.log("Book added")
    }
    catch (err) {
        console.log("Book added eror or already exists")
    }
}
//bookCreate();
const fetchBook=async()=>{
     try{
       let books=await Book.find().populate('author').exec();
       console.log(books);
     }
     catch(err){
        console.log("Error in fetch book")
     }
}
//fetchBook();
app.listen(PORT, (err) => {
    if (err) throw err;
    else console.log(`Server work on port ${PORT}`);
})
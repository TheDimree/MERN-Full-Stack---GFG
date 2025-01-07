import mongoose from "mongoose";
const prodSchema=new mongoose.Schema({
    pname:{
        type:String, 
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number, 
        required:true
    },
    features:{
        type:String,
        required:true
    },
    imagePath:{
        type:String,
        required:true,
    },
    itemsQuantity:{
        type:Number,
        required:true,
    }
},{timestamps:true});
const ProdModel=mongoose.model("Product",prodSchema);
export default ProdModel;
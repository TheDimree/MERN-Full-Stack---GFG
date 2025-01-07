import mongoose from "mongoose";    

const OrderSchema = new mongoose.Schema({
    name: {type: String, required: true},
    amount: Number,
},  {timestamps: true})

const OrderModel = mongoose.model('s_12-order',OrderSchema)

export default OrderModel;
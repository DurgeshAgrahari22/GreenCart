import mongoose from "mongoose";

const orderScehma = new mongoose.Schema({
    userId:{
        type:String,
        requried:true,
        ref:'user'
    },
    items:[{
        product:{
        type:String,
        requried:true,
        ref:'product'
        },
        quantity:{
        type:String,
        requried:true,
        }
    }],
    amount:{
        type:Number,
        requried:true
    },
    address:{
        type:String,
        requried:true,
        ref:'address'
    },
    status:{
        type:String,
        requried:true,
        default:'Order Placed'
    },
    paymentType:{
        type:String,
        requried:true
    },
    isPaid:{
        type:Boolean,
        requried:true,
        default:false
    }
},{timestamps:true})

const Order = mongoose.models.order || mongoose.model('order',orderScehma)

export default Order
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cartItems:{
        type:Object,
        default:{}
    }
    // If you save an empty object {} in a Mongoose document, Mongoose will remove it when saving to MongoDB. So, we use minimized:false
},{minimize:false})

// If a model named "user" already exists in Mongoose's memory, use it.Otherwise, create a new model using userSchema.
const User = mongoose.models.user || mongoose.model("user",userSchema)

export default User
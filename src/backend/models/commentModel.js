import mongoose from "mongoose";



const commentSchema=mongoose.Schema({
    

    body:String,
    likes:Number,
    dislikes:Number,

    
})
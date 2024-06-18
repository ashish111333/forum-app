import mongoose from "mongoose";



const postSchema=mongoose.Schema({



    body:String,
    user_id:String,
    likes:Number,
    dislikes:Number,

    
    
})


export const post=mongoose.model("post",postSchema)
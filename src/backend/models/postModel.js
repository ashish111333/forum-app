import mongoose from "mongoose";



const postSchema=new mongoose.Schema({



    content:{
        type:String,
        required:true,
    },
    user_id:String,
    
    dislikes:Number,
    likes:Number,
    post_id:String,
        
})





export const post=mongoose.model("post",postSchema)



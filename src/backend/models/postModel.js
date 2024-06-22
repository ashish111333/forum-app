import mongoose from "mongoose";



const postSchema=new mongoose.Schema({



    content:{
        type:String,
        required:true,
    },
    user_id:String,
    
    dislikes:Number,
    likes:Number,
    
        
})





export const post=mongoose.model("post",postSchema)



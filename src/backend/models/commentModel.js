import mongoose from "mongoose";



const commentSchema= new mongoose.Schema({
    

    content:{
        type:String,
        required:true,
    },
    likes:Number,
    dislikes:Number,
    user_id:String,
    
})


export const comment=mongoose.model("comment",commentSchema)





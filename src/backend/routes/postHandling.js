import express from "express"

import { post } from "../models/postModel"

export const Router=express.Router()



Router.get("/posts/:post_id",(req,res)=>{})
Router.get("/posts",(req,res)=>{})
Router.post("/",(req,res)=>{returnALLposts(req,res)})







function returnALLposts(req,res){


 
    
    


    
    

    
  
    

    
    
    
    
}
function returnPostById(req,res){



    
    
    
    
    
}


async function  createPost(req,res){

    
    const {content}=req.body
    

    const newPost=new post({content:content})
    
    
    

    
    
    
}
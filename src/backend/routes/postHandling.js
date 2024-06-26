import express from "express"

import { post, post } from "../models/postModel"


export const Router=express.Router()



Router.get("/posts/:post_id",(req,res)=>{})
Router.get("/posts",(req,res)=>{})
Router.post("/",(req,res)=>{returnALLposts(req,res)})







async function returnALLposts(req,res){


    const posts=await post.find({})
    

    
    
    
}

function returnPostById(req,res){



    
    

    
    
    
    
    
}


async function  createPost(req,res){

    
    const {content}=req.body
    

    const newPost=new post({content:content})
    await newPost.save()
    
    

}
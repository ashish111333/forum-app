import express from "express"

import { post } from "../models/postModel"


export const postRouter=express.post()



postRouter.get("/posts/:post_id",(req,res)=>{})
postRouter.get("/posts",(req,res)=>{})
postRouter.post("/",(req,res)=>{returnALLposts(req,res)})







async function returnALLposts(req,res){
    
    

    const postPerPage=5
    const pageNumber=req.params.page_no
    const latestPosts=await post.find({})
    res.send()

    

    
}

function returnPostById(req,res){





    const {post_id}=
    

    
    
    
    
    
}


async function  createPost(req,res){

    
    const {content}=req.body
    
    const newPost=new post({content:content})
    await newPost.save()
    
}
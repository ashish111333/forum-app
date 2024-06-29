import express from "express"

import { post, post } from "../models/postModel"


export const postRouter=express.post()



postRouter.get("/posts/:post_id",(req,res)=>{})
postRouter.get("/posts",(req,res)=>{})
postRouter.post("/",(req,res)=>{returnALLposts(req,res)})







async function returnALLposts(req,res){
    
    

    const postPerPage=5
    const pageNumber=req.params.page_no
    const posts=await post.find({}).sort({_id:-1}).skip(postPerPage*pageNumber).limit(postPerPage)
    
    
}

async function returnPostById(req,res){


    const {post_id}=req.params._id
    const post=await post.find({_id:post_id})
    res.send()
    
    
}


async function  createPost(req,res){

    
    const {content}=req.body
    
    const newPost=new post({content:content})
    await newPost.save()
    
}
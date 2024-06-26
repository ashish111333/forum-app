import express from "express"
import { user } from "../models/userModel"
import * as b from "bcrypt"

export const  Router=express.Router()




Router.post("/auth/register",async (req,res)=>{

    const {username,password}=req.body
    const hashedPassword= await b.hash(password,10)
    
    
    
    const newUser=new user({
        username:username,
        password:hashedPassword,
    })

    await newUser.save()

    res.send({registerd:true})

    


})


Router.post("/auth/login",async (req,res)=>{
    

    const {username,password}=req.body
    const user=await user.findOne({username:username})
    const hashedPassword=user.password
    

    if (await b.compare(hashedPassword,password) && user){
        
        
        
        res.send({login:"sucess"})
        
        
        
    }
    
    res.send({login:"failed"})
    
  
    

    

})

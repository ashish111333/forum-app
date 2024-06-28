
import express from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { authRouter } from "./routes/authHandling";
import { postRouter } from "./routes/postHandling"
import { userRouter } from "./routes/userHandling";



dotenv.config()
connectToDatabase(process.env.DB_URL)
const app=express()
const port=process.env.port


app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use(authRouter)
app.use(postRouter)
app.use(userRouter)





app.listen(port,()=>{

    console.log(`server listening on port ${port}`);
})








async function connectToDatabase(url){
    
    

    try {
        await mongoose.connect(url)
        console.log("connected to database");
    } catch (error) {
        console.log("failed to connect to database : ",error);
    }
   
    
    
}

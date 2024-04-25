import mongoose from "mongoose";
import express from "express";
import body from "body-parser";
import user from "./routes/user"
import {config } from 'dotenv'
config()

const uri = process.env.MONGO_URI;


const app = express();

const connectmongo = async()=>{
    try{
        await mongoose.connect(uri);
        
        console.log("connected to mongo")
    }catch(err){
        console.log(err);
        
    }
}

 connectmongo();

 app.use(body.json({
    limit : '500kb'
 }));

//  Routes

app.use('/api/user', user);



app.listen(3000, ()=>{
    console.log("server started");
})
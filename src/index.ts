import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import AuthRouter from "./Auth.routes"
import { connectToDB } from 'config/DB';

const app = express();

app.use('/auth', AuthRouter)

app.listen(process.env.PORT, ()=>{
    console.log("Server on "+process.env.PORT)

    connectToDB().then(()=>{
        console.log("DB Connected")
    }).catch((err)=>{
        console.error(err.message)
    })
})
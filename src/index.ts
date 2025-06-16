import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import AuthRouter from "./Auth/Auth.routes"
import { connectToDB, initDB } from './Auth/config/DB';
import bodyParser from 'body-parser';
import cors from "cors"

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(cors({
    origin: '*'
}))

app.use('/auth', AuthRouter)

app.listen(process.env.PORT, ()=>{
    console.log("Server on "+process.env.PORT)

    connectToDB().then(()=>{
        console.log("DB Connected")
        initDB();
    }).catch((err)=>{
        console.error(err.message)
    })
})
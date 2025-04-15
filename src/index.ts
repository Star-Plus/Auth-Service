import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import AuthRouter from "Auth.routes"

const app = express();

app.use('/auth', AuthRouter)

app.listen(process.env.PORT, ()=>{
    console.log("Server on "+process.env.PORT)
})
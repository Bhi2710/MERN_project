import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import  Connection  from "./database/db.js";
import DefaultData from "./default.js";
import Router from './routes/route.js';
import UserListData from "./defaultuser.js";

const app = express();
dotenv.config();

app.use(cors())
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Router);

const PORT = 8000;
const USERNAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
Connection(USERNAME, PASSWORD);

app.listen(PORT,()=>{
    console.log(`server is on http://localhost:${PORT}`);
})

DefaultData();
UserListData();
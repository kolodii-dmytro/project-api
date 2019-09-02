import express from "express";
import bodyParser from "body-parser";

import * as homeController from "./controllers/home";

const app=express();
const port = 3010

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', homeController.index);
app.get('/users', homeController.users);
app.post('/users/create', homeController.create);

app.listen(port, ()=>{
    console.log('test')
});


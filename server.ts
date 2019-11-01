import express from "express";
import bodyParser from "body-parser";

import * as homeController from "./controllers/home";
import * as userController from "./controllers/user"
import mongoose, {Schema, model} from "mongoose";

import { Request, Response } from "express";

const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_PATH,
    PORT
  } = process.env;

  console.log(MONGO_PATH, PORT)

mongoose.connect(`mongodb:${MONGO_PATH}`, {useNewUrlParser: true})
  .then(() => console.log(`MongoDB Connected by ${MONGO_PATH}`))
  .catch(err => console.log(err));

const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

const reqLogger = (req: Request, res:Response, next: Function) => {
    console.log( 'got request '+req.url)
    next()
}


const app=express();

app.use(reqLogger)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', homeController.index);

app.get('//user', userController.getAllUsers);
app.get('//user/:id', userController.getOneUser);
app.put('//user/:id', userController.updateUser);
app.delete('//user/:id', userController.deleteUser);
app.post('//user', userController.createUser);

app.get('//obj', homeController.getObjectKeys)

app.listen(PORT, ()=>{
    console.log(`API isten on ${PORT}`)
});


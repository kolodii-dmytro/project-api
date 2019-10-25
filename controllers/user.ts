import { Request, Response } from "express";
import {User} from '../models/user';

export const getAllUsers = (req: Request, res: Response) => {
    User.find((error, users) => {
        if (error) {
            console.error(error);
            res.status(400).json(error)
        } else {
            res.json(users);
        }
      })
}

export const getOneUser = (req: Request, res: Response) => {
    const {id} = req.params
 
    User.find({_id:id},(error, users) => {
        if (error) {
            console.error(error);
            res.status(400).json(error)
        } else {
            res.json(users[0]);
        }
      })
}


export const createUser = (req: Request, res: Response) => {
    const {name, email, password} = req.body
    const newUser = new User({name,email,password})
    newUser.save((error, user)=> {
        if (error){
            console.error(error);
            res.status(400).json(error)
        } else {
            res.json(user)
        }
    })
}

export const updateUser = (req: Request, res: Response) => {
    const {id} = req.params
    const newParams = req.body
    User.findOneAndUpdate({_id:id}, newParams, (error, user)=> {
        if (error){
            console.error(error);
            res.status(400).json(error)
        } else {
            res.json('changed')
        }
    })
}

export const deleteUser = (req: Request, res: Response) => {
    const {id} = req.params
    User.findOneAndDelete({_id:id}, (error, user)=> {
        if (error){
            console.error(error);
            res.status(400).json(error)
        } else {
            res.json('deleted')
        }
    })
}




/**
 * 
 */

import { Request, Response } from "express";
// const jwt = require("jsonwebtoken");
const {
    getUsersModel, signUpModel
} = require("../models/usersModel");



async function getUsers(req: Request, res: Response) {
    try {
        const users = await getUsersModel();
        res.send({ users });
    } catch (err) {
        console.error("getUsers: ", err);
        res.status(500).send(err);
    }
}


async function signUp(req: Request, res: Response) {
    try {
        const newUser = {...req.body};
        const userId = await signUpModel(newUser);
        newUser["userId"] = userId;
        // const token = jwt.sign(
        //     { id: userId }, 
        //     process.env.TOKEN_KEY, 
        //     { expiresIn: "5h" });
        // res.send({ token: token, user: newUser });
        res.send({ user: newUser });
    } catch (err) {
        console.error("User controller signUp: ", err);
        res.status(500).send(err);
    }
}


module.exports = {
    getUsers, signUp
};

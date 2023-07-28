/**
 * 
 */

import { Request, Response } from "express";
// const jwt = require("jsonwebtoken");
const {
    getUsersModel, signUpModel, getUserByEmailModel
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
        delete newUser.passwordConfirm;
        const userId = await signUpModel(newUser);
        newUser["userId"] = userId;
        delete newUser.password;
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


async function signIn(req: Request, res: Response) {
    try {
        const { email } = req.body.user;
        const user = await getUserByEmailModel(email);
        delete user.password;
        // const payload = { id: user._id };
        // const token = jwt.sign(
        //     payload,
        //     process.env.TOKEN_KEY,
        //     { expiresIn: "5h" });
        // res.send({ token: token, user: user });
        res.send({ user: user });
    } catch (err) {
        console.error("User controller login: ", err);
        res.status(500).send(err);
    }
}


module.exports = {
    getUsers, signUp, signIn
};

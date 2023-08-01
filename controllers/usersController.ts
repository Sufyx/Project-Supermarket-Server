/**
 * 
 */

import { Request, Response } from "express";
import { getUsersModel, signUpModel, getUserByEmailModel } from "../models/usersModel";
import { encryptPassword, getToken } from "../utilities/utils";
import { MapUserToDto } from "../schemas/User";



export async function getUsers(req: Request, res: Response) {
    try {
        const users = await getUsersModel();
        res.send({ users });
    } catch (err) {
        console.error("getUsers: ", err);
        res.status(500).send(err);
    }
}


export async function signUp(req: Request, res: Response) {
    try {
        const newUser = {
            ...req.body,
            password: encryptPassword(req.body.password)
        };
        delete newUser.passwordConfirm;
        const userId = await signUpModel(newUser);
        newUser["id"] = userId;
        delete newUser.password;
        const token = getToken({ id: userId });
        res.send({ token: token, user: newUser });
    } catch (err) {
        console.error("User controller signUp: ", err);
        res.status(500).send(err);
    }
}


export async function signIn(req: Request, res: Response) {
    try {
        const { email } = req.body.user;
        const user = await getUserByEmailModel(email);
        if (user == null){
            //todo - do something about it
            return;
        }
        const dto = MapUserToDto(user);
        // const payload = { id: user._id };
        // const token = jwt.sign(
        //     payload,
        //     process.env.TOKEN_KEY,
        //     { expiresIn: "5h" });
        // res.send({ token: token, user: user });
        res.send({ user: dto });
    } catch (err) {
        console.error("User controller login: ", err);
        res.status(500).send(err);
    }
}
/**
 * 
 */

import { Request, Response } from "express";
const {
    getUsersModel
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


module.exports = {
    getUsers
};

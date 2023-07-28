/**
 * 
*/


const { getUserByEmailModel } = require("../models/usersModel");
import { Request, Response, NextFunction } from "express";
const bcrypt = require("bcrypt");



function confirmPassword(req: Request, res: Response, next: NextFunction) {
  if (req.body.password !== req.body.passwordConfirm) {
    console.log("Passwords do not match");
    res.status(400).send("Passwords don't match");
    return;
  }
  next();
}


async function isUserNew(req: Request, res: Response, next: NextFunction) {
  const user = await getUserByEmailModel(req.body.email);
  if (user) {
    res.status(400).send("A user with this email already exists");
    return;
  }
  next();
}


function encryptPassword(req: Request, res: Response, next: NextFunction) {
  const saltRounds = 10;
  bcrypt.hash(req.body.password, saltRounds, (err: { message: any; }, hash: string) => {
    if (err) {
      console.log("encryptPassword error > ", err.message);
      res.status(500).send(err);
      return;
    }
    req.body.password = hash;
    next();
  });
}


async function isUserInDB(req: Request, res: Response, next: NextFunction) {
  const user = await getUserByEmailModel(req.body.email);
  if (user) {
    req.body.user = user;
    next();
    return;
  }
  res.status(400).send("No user found with this email");
}


async function verifyPassword(req: Request, res: Response, next: NextFunction) {
  const { user } = req.body;
  bcrypt.compare(req.body.password, user.password, (err: { message: any; }, result: boolean) => {
    if (err) {
      console.log("verifyPassword error > ", err.message);
      res.status(500).send(err);
      return;
    }
    if (result) {
      next();
      return;
    } else {
      res.status(400).send("Incorrect Password");
    }
  });
}


module.exports = {
  confirmPassword, isUserNew, encryptPassword,
  isUserInDB, verifyPassword,
};

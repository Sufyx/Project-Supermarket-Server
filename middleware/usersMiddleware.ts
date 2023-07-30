/**
 * 
*/


const { getUserByEmailModel } = require("../models/usersModel");
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";



export function confirmPassword(req: Request, res: Response, next: NextFunction) {
  if (req.body.password !== req.body.passwordConfirm) {
    console.log("Passwords do not match");
    res.status(400).send("Passwords don't match");
    return;
  }
  next();
}


export async function isUserNew(req: Request, res: Response, next: NextFunction) {
  const user = await getUserByEmailModel(req.body.email);
  if (user) {
    res.status(400).send("A user with this email already exists");
    return;
  }
  next();
}


export async function isUserInDB(req: Request, res: Response, next: NextFunction) {
  const user = await getUserByEmailModel(req.body.email);
  if (user) {
    req.body.user = user;
    next();
    return;
  }
  res.status(400).send("No user found with this email");
}

export async function encryptPassword(password: string) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}


export async function verifyPassword(req: Request, res: Response, next: NextFunction) {
  const { user } = req.body;
  const result = await bcrypt.compare(req.body.password, user.password);
  if (result) {
    next();
    return;
  } else {
    res.status(400).send("Incorrect Password");
  }
}


// module.exports = {
//   confirmPassword, isUserNew, encryptPassword,
//   isUserInDB, verifyPassword,
// };

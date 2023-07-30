/**
 * 
 */


import User, { UserDocument } from "../schemas/User"
const ObjectId = require('mongodb').ObjectId;



export async function getUsersModel(): Promise<string[] | null> {
  return await User.find();
    // const res = await User.find();
    // return [...res];
}

export async function getUserByEmailModel(email: string): Promise<UserDocument | null> {
  return await User.findOne({ email: email });
}

export async function getUserByIdModel(userId: string): Promise<UserDocument | null> {
  return await User.findOne({ _id: ObjectId(userId) });
  // const user = await User.findOne({ _id: ObjectId(userId) });
  // user!.password = "";
  // return user;
}


export async function signUpModel(userToAdd: UserDocument): Promise<string | null> {
  const newUser = new User(userToAdd);
  newUser.save();
  return newUser._id;
}


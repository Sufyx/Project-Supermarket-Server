/**
 * 
 */


import User, { UserDocument } from "../schemas/User"
const ObjectId = require('mongodb').ObjectId;



export async function getUsersModel() {
  try {
    const res = await User.find();
    return [...res];
  } catch (err: any) {
    console.error("getUsersModel error: ", err.message);
  }
}

export async function getUserByEmailModel(email: string):
  Promise<UserDocument | null> {
  return await User.findOne({ email: email });
}

export async function getUserByIdModel(userId: string) {
  try {
    const user = await User.findOne({ _id: ObjectId(userId) });
    user!.password = "";
    return user;
  } catch (err) {
    if (err instanceof Error)
      console.error("getUserByIdModel error: ", err.message);
  }
}


export async function signUpModel(userToAdd: UserDocument) {
  try {
    const newUser = new User(userToAdd);
    newUser.save();
    const userId = newUser._id;
    return userId;
  } catch (err) {
    if (err instanceof Error)
      console.error("signUpModel error: ", err.message);
  }
}


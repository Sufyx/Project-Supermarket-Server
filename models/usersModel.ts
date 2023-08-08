/**
 * 
 */


import User, { UserDocument } from "../schemas/User"
import { ObjectId } from "mongodb";



export async function getUsersModel(): Promise<string[] | null> {
  return await User.find();
  // const res = await User.find();
  // return [...res];
}

export async function getUserByEmailModel(email: string): Promise<UserDocument | null> {
  return await User.findOne({ email: email });
}

export async function getUserByIdModel(userId: string): Promise<UserDocument | null> {
  return await User.findOne({ _id: new ObjectId(userId) });
  // return await User.findOne({ _id: new ObjectId("userId") });
}


export async function signUpModel(userToAdd: UserDocument): Promise<UserDocument | null> {
  const newUser = new User(userToAdd);
  newUser.save();
  return newUser;
}

export async function addProductToCartModel(productId: string, userId: string): Promise<boolean> {
  try {
  const updateResult = await User.updateOne(
    { _id: userId },
    { $push: { cart: productId } },
    { upsert: true }
  );
  return (updateResult.modifiedCount === 1);
  } catch (error) {
    throw new Error('addProductToCartModel error: ' + error);
  }
}

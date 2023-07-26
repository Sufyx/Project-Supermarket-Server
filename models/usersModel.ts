/**
 * 
 */


import User, { UserDocument } from "../schemas/User"
const ObjectId = require('mongodb').ObjectId;



async function getUsersModel() {
    try {
        const res = await User.find();
        return [...res];
    } catch (err: any) {
        console.error("getUsersModel error: ", err.message);
    }
}


async function getUserByEmailModel(email: string) {
    try {
      const user = await User.findOne({ email: email });
      return user;
    } catch (err: any) {
      console.error("Users model getUserByEmailModel: ", err.message);
    }
  }


  async function getUserByIdModel(userId: string) {
    try {
      const user = await User.findOne({ _id: ObjectId(userId) });
      user!.password = "";
      return user;
    } catch (err: any) {
      console.error("Users model getUserByIdModel: ", err.message);
    }
  }


  async function signUpModel(userToAdd: UserDocument) {
    try {
      const newUser = new User(userToAdd);
      newUser.save();
      const userId = newUser._id;
      return userId;
    } catch (err: any) {
      console.error("Users model signUpModel: ", err.message);
    }
  }



module.exports = {
    getUsersModel, getUserByEmailModel, getUserByIdModel, signUpModel
};
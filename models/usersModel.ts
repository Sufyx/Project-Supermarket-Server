/**
 * 
 */


import User, { UserDocument } from "../schemas/User"
const ObjectId = require('mongodb').ObjectId;


async function getUsersModel() {
    try {
        const res = await User.find();
        return [...res];
    } catch (err) {
        console.error("getUsersModel error: ", err);
    }
}


async function getUserByEmailModel(email: string) {
    try {
      const user = await User.findOne({ email: email });
      return user;
    } catch (err) {
      console.error("Users model getUserByEmailModel: ", err);
    }
  }


  async function getUserByIdModel(userId: string) {
    try {
      const user = await User.findOne({ _id: ObjectId(userId) });
      user!.password = "";
      return user;
    } catch (err) {
      console.error("Users model getUserByIdModel: ", err);
    }
  }



module.exports = {
    getUsersModel, getUserByEmailModel, getUserByIdModel
};
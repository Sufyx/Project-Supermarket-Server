/**
 * 
 */


import User, { UserDocument } from "../schemas/User"


async function getUsersModel() {
    try {
        const res = await User.find();
        return [...res];
    } catch (err) {
        console.error("getUsersModel error: ", err);
    }
}



module.exports = {
    getUsersModel
};
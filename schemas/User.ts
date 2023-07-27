/**
 * 
 */

import { Schema, model, Document } from 'mongoose';

const userSchema = new Schema({
    name: String,
    password: String,
    email: String,
    phone: String,
    role: String,
    birthDate: Date,
    orders: [String],
    favorites: [String],
    creditCards: [String],
});

export interface UserDocument extends Document {
    name: string,
    password: string,
    email: string,
    phone: string,
    role: string,
    birthDate: Date,
    orders: string[],
    favorites: string[],
    creditCards: string[],
}

const User = model<UserDocument>('User', userSchema);
export default User;

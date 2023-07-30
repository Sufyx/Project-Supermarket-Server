/**
 * 
 */

import { Schema, model, Document } from 'mongoose';

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

export type UserDto = Omit<UserDocument, "password">;

const userSchema: Schema<UserDocument> = new Schema({
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

const User = model<UserDocument>('User', userSchema);

export function MapUserToDto(user: UserDocument): UserDto {
    const result: any = { ...user };
    delete result.password;
    return result as UserDto;
}

export default User;

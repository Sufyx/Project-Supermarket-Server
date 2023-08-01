/**
 * 
 */


import bcrypt from "bcrypt";
import * as dotenv from 'dotenv';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
dotenv.config();


export async function encryptPassword(password: string) {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
}

export async function getToken(payload: object): Promise<string> {
    return jwt.sign(
        payload,
        process.env.TOKEN_KEY as string,
        { expiresIn: "24h" });
} 

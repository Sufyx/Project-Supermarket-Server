/**
 * 
 */

import { Request, Response } from "express";
import { getProductsModel } from "../models/productsModel";

export async function getProducts(req: Request, res: Response) {
    try {
        const products = await getProductsModel();
        res.send({ products });
    } catch (err) {
        console.error("getProducts: ", err);
        res.status(500).send(err);
    }
}

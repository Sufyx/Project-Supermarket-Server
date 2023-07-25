/**
 * 
 */

import { Request, Response } from "express";
const {
    getProductsModel
} = require("../models/productsModel");

async function getProducts(req: Request, res: Response) {
    try {
        const products = await getProductsModel();
        res.send({ products });
    } catch (err) {
        console.error("getProducts: ", err);
        res.status(500).send(err);
    }
}


module.exports = {
    getProducts
};

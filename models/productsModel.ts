/**
 * 
 */


import Product, { ProductDocument } from "../schemas/Product"


export async function getProductsModel() {
    try {
        const res = await Product.find();
        return [...res];
    } catch (err) {
        console.error("getProductsModel error: ", err);
    }
}


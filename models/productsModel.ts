/**
 * 
 */


import Product, { ProductDocument } from "../schemas/Product"


export async function getProductsModel(): Promise<ProductDocument[] | null> {
    return await Product.find();
}


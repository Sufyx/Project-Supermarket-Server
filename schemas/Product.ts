/**
 * 
 */

import { Schema, model, Document } from 'mongoose';

const productSchema = new Schema({
    name: String,
    brand: String,
    description: String,
    supplier: String,
    price: Number,
    barcode: Number,
    quantity: Number,
    lastUpdate: Date,
    tags: [String],
    categories: [String],
    images: [String],
});

export interface ProductDocument extends Document {
    name: string;
    brand: string;
    description: string;
    supplier: string;
    price: number;
    barcode: number;
    quantity: number;
    lastUpdate: Date;
    tags: string[];
    categories: string[];
    images: string[];
}

const Product = model<ProductDocument>('Product', productSchema);
export default Product;

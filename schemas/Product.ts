/**
 * 
 */

import { Schema, model, Document } from 'mongoose';

const productSchema = new Schema({
    name: String,
    tags: [String],
    categories: [String],
    brand: String,
    description: String,
    barcode: Number,
    price: Number,
    quantity: Number,
    lastUpdate: Date,
    supplier: String,
    images: [String],
});

export interface ProductDocument extends Document {
    name: string;
    tags: string[];
    categories: string[];
    brand: string;
    description: string;
    barcode: number;
    price: number;
    quantity: number;
    lastUpdate: Date;
    supplier: string;
    images: string[];
}

const Product = model<ProductDocument>('Product', productSchema);
export default Product;

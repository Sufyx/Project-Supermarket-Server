/**
 * 
 */

import express from "express";
import * as ProductsCtrl from "../controllers/productsController";
const router = express.Router();


router.get("/getProducts", ProductsCtrl.getProducts);


export default router;
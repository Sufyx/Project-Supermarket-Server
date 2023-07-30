/**
 * 
 */

import express from "express";
const router = express.Router();
import * as ProductsCtrl from "../controllers/productsController";


router.get("/getProducts", ProductsCtrl.getProducts);


export default router;
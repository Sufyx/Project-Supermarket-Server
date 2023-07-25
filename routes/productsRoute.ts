/**
 * 
 */

const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/productsController");


router.get("/getProducts", ProductsController.getProducts);


export default router;
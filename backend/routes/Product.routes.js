import express from "express";
 
// Import the controllers

import { createProducts, deleteProducts, getProducts, updateProducts } from '../controllers/Product.controllers.js';

const router=express.Router();
// Define routes

router.get('/',getProducts); // Get all products


router.post('/',createProducts); // Create a new product

router.put('/:id',updateProducts); // Update an existing product

router.delete('/:id',deleteProducts); // Delete a product

export default router;




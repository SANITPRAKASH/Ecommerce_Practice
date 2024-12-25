import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/Product.models.js';

export const getProducts = async (req,res) =>{
    try{
        const product= await Product.find();
        res.status(200).json({success:true,data:product});
        
    }catch(error){
        console.log(error)
        res.status(500).json({success:false, message:"Failed to fetch product"})

    };
    
}

export const createProducts = async (req,res) =>{
    try{
        const product=new Product(req.body);
        await product.save();
        res.status(201).json({success:true, message:"Product created successfully", data:product});
        
    }catch(error){
        console.log(error)
        res.status(400).json({success:false, message:"Failed to create product"})
 }
}

export const updateProducts = async (req,res) =>{
    try{
        const product=await Product.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if(!product) return res.status(404).json({success:false, message:"Product not found"})
        res.status(200).json({success:true, message:"Product updated successfully", data:product});
        
    }catch(error){
        console.log(error)
        res.status(400).json({success:false, message:"Failed to update product"})
 }
}

export const deleteProducts = async (req,res) =>{
    try{
        const product=await Product.findByIdAndDelete(req.params.id);
        if(!product) return res.status(404).json({success:false, message:"Product not found"})
        res.status(200).json({success:true, message:"Product deleted successfully", data:product});
        
    }catch(error){
        console.log(error)
        res.status(400).json({success:false, message:"Failed to delete product"})
 }
}

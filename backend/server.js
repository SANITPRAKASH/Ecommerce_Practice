import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import path from 'path';
import router from './routes/Product.routes.js';

dotenv.config();

      


const app=express();
const port=3000;
const __dirname=path.resolve();

console.log(process.env.MONGO_URI)
app.use(express.json());

app.use('/api/products',router);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"frontend/dist")))
}

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','dist','index.html'))
})

app.listen(port,()=>{
    connectDB();
    console.log(`listening to port ${port}`)})


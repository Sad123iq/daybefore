const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

const ProductSchema = new mongoose.Schema({
    title:String,
    image:String,
    desc:String,
    price:Number,
    count:Number,
    totalPrice:Number
})

const Products = mongoose.model("Products", ProductSchema)

app.get("/api/products", async (req,res)=>{
    const resp = await Products.find()
    res.send(resp)
})

app.get("/api/products/:id", async (req,res)=>{
    const {id} = req.params
    const resp = await Products.findById(id)
    res.send(resp)
})

app.put("/api/products/:id", async (req,res)=>{
    const {id} = req.params
    const resp = await Prodcuts.findByIdAndUpdate(id,{...req.body})
    res.send("Item Updated")
})

app.post("/api/products", async (req,res)=>{
    const {title,image,desc,price} = req.body
    const newProduct = new Products({
        title:title,
        image:image,
        desc:desc,
        price:price
    })
    await newProduct.save()
    res.send("Item created")
})

app.delete("/api/products/:id", async (req,res)=>{
    const {id} = req.params
    const resp = await Products.findByIdAndDelete(id)
    res.send("Item deleted")
})

mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(resp=>{console.log("DB CONNECTED");})
    .catch(err=>{console.log("DB IS NOT CONNECTED");})

app.listen(process.env.PORT, (res)=>{
    console.log("PORT CONNECTED");
})
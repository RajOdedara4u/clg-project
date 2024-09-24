const express = require("express");
const PopularSales = require("../models/PopularSales");
const Product = require("../models/Product");
const product = express.Router();

product.post("/PopularSales", async (req, res) => {
  const { name, image, auther, desc, oPrice, price } = req.body;
  console.log(req.body);
  try {
    const newPopularSales = new PopularSales({
      name,
      image,
      auther,
      desc,
      oPrice,
      price,
    });
    await newPopularSales.save();
    return res.json({ name, image, auther, desc, oPrice, price }).status(200);
  } catch (error) {
    console.log(error);
  }
});

product.post("/addProducts", async (req, res) => {
  const { name, image, auther, desc, oPrice, price,category } = req.body;
  console.log(req.body);
  try {
    const newProduct = new Product({
      name,
      image,
      auther,
      desc,
      oPrice,
      price,
      category,
    });
    await newProduct.save();
    return res.json({ name, image, auther, desc, oPrice, price ,category}).status(200);
  } catch (error) {
    console.log(error);
  }
});

product.get("/getProducts", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products).status(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = product;

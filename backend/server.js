import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/z;id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(products);
});

const PORT = process.env.PORT || 3030;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

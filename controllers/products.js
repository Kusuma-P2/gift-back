import Products from "../models/Products.js";

export const productsUpload = (req, res) => {
  Products.find({},(err,products) => {
    res.json(products)
  })
};

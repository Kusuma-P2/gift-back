import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import { getUser, signin, signout, signup } from "./controllers/auth.js";
import { contact } from "./controllers/contact.js";
import { productsUpload } from "./controllers/products.js";
import { addCart, getCart, removeCart } from "./controllers/cart.js";

const app = express();
const upload = multer();

//db config
const mongoURL = "mongodb://127.0.0.1:27017/giftdb";

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload.array());
app.use(cors());

//PORT
const port = process.env.PORT || 8000;

//STARTING SERVER
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});

app.post("/signin", signin);

app.post("/signup", signup);
app.post("/contact", contact);
app.get("/product", productsUpload);
app.get("/getuser", getUser);
app.get("/signout", signout);
app.post('/add_cart',addCart)
app.post('/get_cart',getCart)
app.post('/remove_cart',removeCart)

import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    requried: true,
    trim: true,
  },
  image: {
    type: String,
    requried: true,
    trim: true,
  },
  cost: {
    type: Number,
    requried: true,
    trim: true,
  },
});

export default mongoose.model("Products", productSchema);

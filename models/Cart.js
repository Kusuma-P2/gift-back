import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  uid: {
    type: String,
  },
  products: {
    type: Array
  }
});

export default mongoose.model("Cart", cartSchema);

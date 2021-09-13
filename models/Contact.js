import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        requried: true,
        trim: true,
      },
    email: {
        type: String,
        requried: true,
        trim: true,
      },
    subject: {
        type: String,
        requried: true,
        trim: true,
      },
    message: {
        type: String,
        requried: true,
        trim: true,
      }
})

export default mongoose.model("ContactUs",contactSchema)
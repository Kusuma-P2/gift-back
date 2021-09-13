import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requried: true,
      trim: true,
    },
    email: {
      type: String,
      requried: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      requried: true,
      maxlength: 10,
    },
    password: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true }
);

userSchema.methods = {
  authenticate: function (password) {
    return this.password === password
  }
}

export default mongoose.model("User",userSchema)
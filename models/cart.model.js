const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    // user_id: String,
    course: [String]
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema, "carts");

module.exports = Cart;
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  image: [String],
  rating: {
    rate: Number,
    ratings: Number,
    reviews: Number,
  },
  brand: {
    type: String,
  },
  type: {
    type: String,
  },
  fabric: {
    type: String,
  },
  collar: {
    type: String,
  },
  color: {
    type: String,
  },
  pattern: {
    type: String,
  },
  stretchable: String,
  tipShape: String,
  soleMaterial: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

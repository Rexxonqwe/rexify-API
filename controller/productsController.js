// const objectID = require("mongodb").objectID;
const { ObjectID } = require("bson");
const Product = require("../model/productModel");

exports.getProducts = async (req, res, next) => {
  try {
    if (!req.query) return next();

    const query = req.query.search;
    if (query.length < 3) throw new Error("Invalid search String!", 400);
    const regexQuery = new RegExp(`(?:^|\W*)#${query}(?:$|\W*)`);
    const products = await Product.find({ category: regexQuery });

    res.status(200).json({
      status: "success",
      results: products.length,
      data: products,
    });
  } catch (err) {
    // console.log(`${err}💥💥💥💥`);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) throw new Error("Invalid Product Id!", 400);
    const product = await Product.findById({ _id: id });

    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    // console.log(`${err}💥💥💥💥`);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("hello from express server");
// });

router.post("/", createProduct);

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;

const ProductController = require("../controllers/product.controller");

module.exports = app => {
  app.get("/api/product/", ProductController.findProducts);
  app.post("/api/product/create/", ProductController.createProduct);
  app.delete("/api/product/delete/:id", ProductController.deleteProduct);
};
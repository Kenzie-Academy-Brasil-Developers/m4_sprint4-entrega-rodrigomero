import { Router } from "express";
import createProductController from "../controllers/products/createProduct.controller.js";
import deleteProductController from "../controllers/products/deleteProduct.controller.js";
import listCategoryProductsController from "../controllers/products/listCategoryProducts.controller.js";
import listProductController from "../controllers/products/listProduct.controller.js";
import listProductsController from "../controllers/products/listProducts.controller.js";
import updateProductController from "../controllers/products/updateProduct.controller.js";

const productsRouter = Router();

productsRouter.post("", createProductController);
productsRouter.get("", listProductsController);
productsRouter.get("/:id", listProductController);
productsRouter.patch("/:id", updateProductController);
productsRouter.delete("/:id", deleteProductController);
productsRouter.get("/category/:category_id", listCategoryProductsController);

export default productsRouter;

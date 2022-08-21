import { Router } from "express";
import createProductController from "../controllers/products/createProduct.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import listCategoryProductsController from "../controllers/products/listCategoryProducts.controller";
import listProductController from "../controllers/products/listProduct.controller";
import listProductsController from "../controllers/products/listProducts.controller";
import updateProductController from "../controllers/products/updateProduct.controller";

const productsRouter = Router();

productsRouter.post("", createProductController);
productsRouter.get("", listProductsController);
productsRouter.get("/:id", listProductController);
productsRouter.patch("/:id", updateProductController);
productsRouter.delete("/:id", deleteProductController);
productsRouter.get("/category/:category_id", listCategoryProductsController);

export default productsRouter;

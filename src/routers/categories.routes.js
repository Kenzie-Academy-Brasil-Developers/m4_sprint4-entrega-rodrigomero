import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller.js";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller.js";
import listCategoriesController from "../controllers/categories/listCategories.controller.js";
import listCategoryController from "../controllers/categories/listCategory.controller.js";
import updateCategoryController from "../controllers/categories/updateCategory.controller.js";

const categoryRouter = Router();

categoryRouter.post("", createCategoryController);
categoryRouter.get("", listCategoriesController);
categoryRouter.get("/:id", listCategoryController);
categoryRouter.patch("/:id", updateCategoryController);
categoryRouter.delete("/:id", deleteCategoryController);

export default categoryRouter;

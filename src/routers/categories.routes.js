import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import listCategoryController from "../controllers/categories/listCategory.controller";
import updateCategoryController from "../controllers/categories/updateCategory.controller";

const categoryRouter = Router();

categoryRouter.post("", createCategoryController);
categoryRouter.get("", listCategoriesController);
categoryRouter.get("/:id", listCategoryController);
categoryRouter.patch("/:id", updateCategoryController);
categoryRouter.delete("/:id", deleteCategoryController);

export default categoryRouter;

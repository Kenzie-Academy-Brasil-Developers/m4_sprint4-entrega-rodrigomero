import deleteCategoryService from "../../services/categories/deleteCategory.service.js";

const deleteCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedUser = await deleteCategoryService(id);

    return response.status(204).json(deletedUser);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default deleteCategoryController;

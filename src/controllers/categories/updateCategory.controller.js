import updateCategoryService from "../../services/categories/updateCategory.service.js";


const updateCategoryController = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  try {
    const res = await updateCategoryService(id, name);

    return response.status(200).json(res);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default updateCategoryController;

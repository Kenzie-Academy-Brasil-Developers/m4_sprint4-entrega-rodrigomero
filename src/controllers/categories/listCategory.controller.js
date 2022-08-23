import listCategoryService from "../../services/categories/listCategory.service.js";


const listCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    const category = await listCategoryService(id);

    return response.status(200).json(category);
  } catch (err) {
    return response.status(400).json({message: err.message});
  }
};

export default listCategoryController;

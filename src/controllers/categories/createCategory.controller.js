import createCategoryService from "../../services/categories/createCategory.service.js";

const createCategoryController = async (request, response) => {
  const { name } = request.body;

  try {
    const category = await createCategoryService(name);
    const resposta = {
      category,
      message: "Category created"
    }
    return response.status(201).json(resposta);
  } catch (err) {
    return response.status(400).json({message: err.message});
  }
};

export default createCategoryController;

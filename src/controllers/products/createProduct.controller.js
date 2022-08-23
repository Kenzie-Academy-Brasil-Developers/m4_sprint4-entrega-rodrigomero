import createProductService from "../../services/products/createProduct.service.js";

const createProductController = async (request, response) => {
  const { name, price, category_id:categoryId } = request.body;

  try {
    const product = await createProductService(name, price, categoryId);
    const resposta = {
      product,
      message: "Category created"
    }
    return response.status(201).json(resposta);
  } catch (err) {
    return response.status(400).json({message: err.message});
  }
};

export default createProductController;

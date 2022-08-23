import updateProductService from "../../services/products/updateProduct.service.js";

const updateProductController = async (request, response) => {
  const { id } = request.params;
  const userData = request.body;

  try {
    const product = await updateProductService(id, userData);

    return response.status(200).json(product);
  } catch (err) {
    return response.status(400).json({message: err.message});
  }
};

export default updateProductController;

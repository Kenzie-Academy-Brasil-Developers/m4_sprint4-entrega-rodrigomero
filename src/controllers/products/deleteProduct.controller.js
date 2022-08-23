import deleteProductService from "../../services/products/deleteProduct.service.js";

const deleteProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedProduct = await deleteProductService(id);
    return response.status(204).json(deletedProduct)
  } catch (err) {
    return response.status(400).json({message: err.message});
  }
};

export default deleteProductController;

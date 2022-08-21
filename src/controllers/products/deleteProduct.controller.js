import deleteProductService from "../../services/products/deleteProduct.service";

const deleteProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedProduct = await deleteProductService(id);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default deleteProductController;
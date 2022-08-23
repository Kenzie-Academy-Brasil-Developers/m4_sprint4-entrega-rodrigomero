import listProductService from "../../services/products/listProduct.service.js";

const listProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const product = await listProductService(id);

    return response.status(200).json(product);
  } catch (err) {
    return response.status(400).json({message: err.message});
  }
};

export default listProductController;

import listProductService from "../../services/products/listProduct.service";

const listProductController = (request, response) => {
  const { id } = request.params;

  try {
    const product = listProductService(id);

    return response.status(200).json(product);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listProductController;

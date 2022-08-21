import updateProductService from "../../services/products/updateProduct.service";

const updateProductController = async (request, response) => {
  const { id } = request.params;
  const { name, price, category_id: categoryId } = request.body;

  try {
    const product = await updateProductService(id, name, price, categoryId);

    return response.status(200).json(product);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default updateProductController;

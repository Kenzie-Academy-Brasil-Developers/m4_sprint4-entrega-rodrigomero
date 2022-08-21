import createProductService from "../../services/products/createProduct.service";

const createProductController = async (request, response) => {
  const { name, price, categoryId } = request.body;

  try {
    const user = await createProductService(name, price, categoryId);

    return response.status(201).json(user);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default createProductController;
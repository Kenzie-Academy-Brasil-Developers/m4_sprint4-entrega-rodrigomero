import listCategoryProductsService from "../../services/products/listCategoryProducts.service";

const listCategoryProductsController = async (request, response) => {
  const { category_id: categoryId } = request.params;

  try {
    const products = await listCategoryProductsService(categoryId);

    return response.status(200).json(products);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listCategoryProductsController;

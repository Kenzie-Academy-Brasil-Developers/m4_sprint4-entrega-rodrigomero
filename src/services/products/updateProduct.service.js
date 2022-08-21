import database from "../../database/index.js";

const updateProductService = async (id, name, price, categoryId) => {
  try {
    const res = await database.query(
      "UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4 RETURNING *",
      [name, price, categoryId, id]
    );

    if (res.rows.length === 0) {
      throw "Product not found";
    }

    return { message: "Product updated", product: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService;

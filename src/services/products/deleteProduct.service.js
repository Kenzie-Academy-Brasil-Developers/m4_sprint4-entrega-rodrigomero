import database from "../../database";

const deleteProductService = async (id) => {
  try {
    const res = database.query("DELETE FROM products WHERE id = $1", [id]);

    if (res.rows.length === 0) {
      throw "Product not found";
    }

    return "Product deleted";
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteProductService;

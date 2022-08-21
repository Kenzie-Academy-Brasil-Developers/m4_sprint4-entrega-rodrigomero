import database from "../../database/index.js";

const listProductService = async (id) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1", [id]);

    if (res.rows.length === 0) {
      throw "Product not found";
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductService;

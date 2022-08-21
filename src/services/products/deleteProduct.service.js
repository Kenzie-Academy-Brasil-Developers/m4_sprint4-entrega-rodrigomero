import database from "../../database/index.js";

const deleteProductService = async (id) => {
  try {
    const res = await database.query("DELETE FROM products WHERE id = $1 RETURNING *", [id]);
    if (res.rows.length === 0) {
      throw "Product not found";
    }
    
    console.log(res.rows)
    return "Product deleted";
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteProductService;

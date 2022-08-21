import { v4 as uuidv4 } from "uuid";
import database from "../../database/index.js";

const createProductService = async (name, price, categoryId) => {
  const id = uuidv4();
  
  try {
    const res = await database.query(
      "INSERT INTO products(id, name, price, category_id) VALUES($1, $2, $3, $4) RETURNING *",
      [id, name, price, categoryId]
    );

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default createProductService;

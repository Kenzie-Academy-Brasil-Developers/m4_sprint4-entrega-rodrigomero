import database from "../../database/index.js";

const deleteCategoryService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM categories WHERE id = $1 RETURNING *",
      [id]
    );

    if (res.rows.length === 0) {
      throw "User not found";
    }

    return "User deleted";
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteCategoryService;

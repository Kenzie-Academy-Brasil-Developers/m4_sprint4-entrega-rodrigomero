import database from "../database";

const updateCategoryService = async (id, name) => {
  try {
    const res = database.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );

    if (res.rows.length === 0) {
      throw "User not found";
    }

    return { message: "User updated", user: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateCategoryService;

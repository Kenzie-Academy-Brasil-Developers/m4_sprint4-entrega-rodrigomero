import database from "../../database/index.js";

const listCategoryProductsService = async (categoryId) => {
  try {
    const res = await database.query(
      `
    SELECT
      p.name,
      p.price,
      c.name as category
    FROM
      products p
      JOIN categories c ON p.category_id = c.id
    WHERE
      category_id = $1
        `,
      [categoryId]
    );
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listCategoryProductsService;

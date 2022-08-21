import database from "../../database";

const listCategoryProductsService = async (categoryId) => {
  try {
    const res = database.query(`
        SELECT 
            p.name,
            p.price,
            c.name
        FROM 
            products p JOIN categories c ON p.category_id = c.id 
        WHERE
            category_id = $1
        `);
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listCategoryProductsService;

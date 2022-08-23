import database from "../../database/index.js";

const updateProductService = async (id, userData) => {
  try {
    if (userData.id) {
      delete userData["id"];
    }
    
    let query = "UPDATE products SET ";
    const keys = Object.keys(userData);
    const values = Object.values(userData);

    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `;
    });

    query = query.slice(0, -2);

    query += ` WHERE id = \$${(keys.length += 1)} RETURNING *`;

    const res = await database.query(query, [...values, id]);

    if (res.rows.length === 0) {
      throw "Product not found";
    }

    return { message: "Product updated", product: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService;

import express from "express";
import "dotenv/config";
import categoryRouter from "./routers/categories.routes";
import productsRouter from "./routers/products.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoryRouter);
app.use("/products", productsRouter);

export default app.listen(3333, () => {
  console.log("Server running");
});

import express from "express"
import categoryRoutes from "./src/routes/category.js";
import productsRoutes from "./src/routes/products.js";


const app = express();

app.use(express.json())

app.use("/api/category", categoryRoutes);
app.use("/api/products", productsRoutes)

export default app;
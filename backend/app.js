import express from "express"
import categoryRoutes from "./src/routes/category.js";


const app = express();

app.use(express.json())

app.use("/api/category", categoryRoutes);

export default app;
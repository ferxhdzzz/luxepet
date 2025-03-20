import express from "express"
import cartRoutes from "./src/routes/Cart.js";
import reviewsRoutes from "./src/routes/Reviews.js";

const app = express();

app.use(express.json())

app.use("/api/cart",cartRoutes);
app.use("/api/reviews",reviewsRoutes);

export default app;
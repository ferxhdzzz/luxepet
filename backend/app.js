import express from "express"
import emloyeesRoutes from "./src/routes/employees.js"
import customersRoutes from "./src/routes/customers.js"
import suppliersRoutes from "./src/routes/suppliers.js"


const app = express();

app.use(express.json())

app.use("/api/employees",emloyeesRoutes)
app.use("/api/customers",customersRoutes)
app.use("/api/suppliers",suppliersRoutes)


export default app;
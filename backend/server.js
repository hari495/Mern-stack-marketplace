import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; 
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;;
app.use(express.json());//allows us to accept json data in body

app.use("/api/products", productRoutes); //mounting the product routes

app.listen(PORT, () => {
    connectDB();
    console.log("server started at http://localhost:" + PORT);
});


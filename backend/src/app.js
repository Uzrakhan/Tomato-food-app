import express from "express";
import cors from "cors";
import restaurantRoutes from "./routes/rest.routes.js";


const app = express();

app.use(cors({
    origin: 'https://tomato-food-app-two.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

app.use("/api/restaurants", restaurantRoutes);


app.get("/", (req, res) => {
  res.send("API running...");
});



export default app;

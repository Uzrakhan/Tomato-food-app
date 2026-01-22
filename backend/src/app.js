import express from "express";
import cors from "cors";
import restaurantRoutes from "./routes/rest.routes.js";


const app = express();

const allowedOrigins = [
  'https://tomato-food-app-two.vercel.app', // Your live frontend
  'http://localhost:5173'                  // Your local Vite frontend
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


app.use(express.json());

app.use("/api/restaurants", restaurantRoutes);


app.get("/", (req, res) => {
  res.send("API running...");
});

app.get("/ping", (req, res) => {
  res.status(200).send("ok");
});

export default app;

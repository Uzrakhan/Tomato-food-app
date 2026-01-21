import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0',  () =>
  console.log(`Server running on port ${PORT}`)
);

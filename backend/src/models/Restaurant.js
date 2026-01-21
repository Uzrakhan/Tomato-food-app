import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  rating: Number,
  deliveryTime: String,
  image: String,
  isHalal: Boolean,
  budgetLevel: {
    type: String,
    enum: ["low", "medium", "high"]
  }
});

export default mongoose.model("Restaurant", restaurantSchema);

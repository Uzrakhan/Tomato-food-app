import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // diningOut, orderOnline, nightLife
  category: String, 
  rating: { type: Number, default: 0 },
  image: String,
  
  // --- Contact & Location Information ---
  contact: { type: String, required: true }, // Added this!
  address: String,  // Full street address
  location: String, // Neighborhood/Area name
  
  // --- Detailed Info ---
  cuisines: [String],
  priceRange: String, 
  placeKnownFor: [String],
  moreInfo: [String],
  menu: { type: Object, default: {} },
  
  // --- Existing Meta ---
  deliveryTime: String,
  isHalal: { type: Boolean, default: false },
  budgetLevel: {
    type: String,
    enum: ["low", "medium", "high"]
  }
}, { timestamps: true });

export default mongoose.model("Restaurant", restaurantSchema);
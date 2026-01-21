import mongoose from "mongoose";
import dotenv from "dotenv";
import Restaurant from "./models/Restaurant.js";
import restaurantData from "./data/Restaurants.js";

dotenv.config();

const seedRestaurants = async () => {
  try {
    // 1️⃣ Connect DB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    // 2️⃣ Clear existing data
    await Restaurant.deleteMany();
    console.log("🗑️ Old restaurants removed");

    // 3️⃣ Flatten & attach type
    const flattenedRestaurants = [];

    Object.entries(restaurantData).forEach(([type, restaurants]) => {
      if (!Array.isArray(restaurants)) return;

      restaurants.forEach((restaurant) => {
        flattenedRestaurants.push({
          name: restaurant.name,
          cuisines: restaurant.cuisines || [],
          location: restaurant.location,
          rating: restaurant.rating,
          priceRange: restaurant.priceRange,
          openingHours: restaurant.openingHours,
          isOpen: restaurant.isOpen ?? true,
          outdoorSeating: restaurant.outdoorSeating ?? false,
          servesAlcohol: restaurant.servesAlcohol ?? false,
          pubsAndBars: restaurant.pubsAndBars ?? false,
          moreInfo: restaurant.moreInfo || [],
          placeKnownFor: restaurant.placeKnownFor || [],
          contact: restaurant.contact,
          image: restaurant.image,
          menu: restaurant.menu || {},
          type // 🔥 diningOut | orderOnline | nightLife
        });
      });
    });

    // 4️⃣ Insert
    await Restaurant.insertMany(flattenedRestaurants);

    console.log(
      `🎉 Seeded ${flattenedRestaurants.length} restaurants successfully`
    );

    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedRestaurants();

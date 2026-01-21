import Restaurant from "../models/Restaurant.js";

export const getRestaurants = async (req, res) => {
  const { category, search } = req.query;

  let filter = {};

  if (category) filter.category = category;
  if (search)
    filter.name = { $regex: search, $options: "i" };

  const restaurants = await Restaurant.find(filter);
  res.json(restaurants);
};

export const getRestaurantById = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  res.json(restaurant);
};

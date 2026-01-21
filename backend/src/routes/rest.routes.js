import express from "express";
import {
  getRestaurants,
  getRestaurantById
} from "../controllers/rest.controller.js";

const router = express.Router();

router.get("/", getRestaurants);
router.get("/:id", getRestaurantById);

export default router;

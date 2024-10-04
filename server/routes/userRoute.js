import express from "express";
import {
  cancelBooking,
  createUser,
  getAllFavourites,
  loginUser,
  toFav,
} from "../controllers/userCntrl.js";
import { bookVisit } from "../controllers/userCntrl.js";
import { getAllBookings } from "../controllers/userCntrl.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prismaConfig.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking", cancelBooking);
router.post("/toFav/:rid ", toFav);
router.post("/allFav", getAllFavourites);
router.post("/login", loginUser);
export { router as userRoute };

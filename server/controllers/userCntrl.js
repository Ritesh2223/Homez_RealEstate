import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = asyncHandler(async (req, res) => {
  console.log("creating a user");

  let { email, password } = req.body;

  const userExists = await prisma.user.findUnique({ where: { email: email } });

  if (!userExists) {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { ...req.body, password: hashedPassword },
    });

    res.send({
      message: "User registered successfully",
      user: user,
    });
  } else {
    res.status(201).send({ message: "User already registered" });
  }
});
//function to book a visit to resd
export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;
  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email: email },
      select: { bookVisits: true },
    });
    if (!alreadyBooked) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    if (
      alreadyBooked.bookVisits &&
      alreadyBooked.bookVisits.some((visit) => visit.id === id)
    ) {
      res
        .status(400)
        .json({ message: "This residency is already booked by you" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookVisits: { push: { id, date } },
        },
      });
      res.send("Your visit is booked successfully");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

//function to get all bookings of a user
export const getAllBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookVisits: true },
    });
    res.send(200).send(bookings);
  } catch (err) {
    throw new Error(err.message);
  }
});

//function to cancel the bookings
export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: { bookVisits: true },
    });
    const index = user.bookVisits.findIndex((visit) => visit.id === id);
    if (index === -1) {
      res.status(404).json({ message: "Booking not fund" });
    } else {
      user.bookVisits.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: {
          bookVisits: user.bookVisits,
        },
      });
      res.send("Booking cancelled successfully");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

//function to add a resd in favourites list of a user
export const toFav = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (user.favResidenciesiD.includes(rid)) {
      const updatedUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesiD: {
            set: user.favResidenciesiD.filter((id) => id !== rid),
          },
        },
      });
      res.send({ message: "Removed from favourites", user: updatedUser });
    } else {
      const updatedUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesiD: {
            push: rid,
          },
        },
      });
      res.send({ message: "Updated favourites", user: updatedUser });
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

//function to get all favourites
export const getAllFavourites = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const favResd = await prisma.user.findUnique({
      where: { email },
      select: { favResidenciesiD: true },
    });
    res.status(200).send(favResd);
  } catch (err) {
    throw new Error(err.message);
  }
});

// export const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   // Check if email and password are provided
//   if (!email || !password) {
//     return res.status(400).json({ error: "Email and password are required" });
//   }

//   // Find user by email
//   const user = await prisma.user.findUnique({ where: { email } });

//   // Check if user exists
//   if (!user) {
//     return res.status(404).json({ error: "User not found" });
//   }

//   // Compare passwords
//   const passwordMatch = await bcrypt.compare(password, user.password);

//   if (!passwordMatch) {
//     return res.status(401).json({ error: "Invalid password" });
//   }

//   // Create JWT token
//   const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
//     expiresIn: "1h", // Token expires in 1 hour
//   });

//   res.status(200).json({ token });
// });

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });

    // Log the retrieved user object for debugging purposes
    console.log("User fetched from database: ", user);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ error: "Invalid email or password" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Log password comparison result
    console.log("Password match result: ", passwordMatch);

    // If password is incorrect, return error
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // If password is correct, sign JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    // Remove sensitive fields from user object before sending response
    const { password: userPassword, ...userData } = user;

    res.status(200).json({ token, user: userData });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

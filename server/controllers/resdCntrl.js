// import asyncHandler from "express-async-handler";
// import { prisma } from "../config/prismaConfig.js";
// export const createResidency = asyncHandler(async (req, res) => {
//   const {
//     title,
//     description,
//     price,
//     address,
//     country,
//     city,
//     facilities,
//     image,
//     userEmail,
//   } = req.body.data;
//   console.log(req.body.data);
//   try {
//     const residency = await prisma.residency.create({
//       data: {
//         title,
//         description,
//         price,
//         address,
//         country,
//         city,
//         facilities,
//         image,
//         owner: { connect: { email: userEmail } },
//       },
//     });

//     res.send({ message: "Residency created successfully" });
//   } catch (err) {
//     if (err.code === "p2002") {
//       throw new Error("A residdency with address already there");
//     }
//     throw new Error(err.message);
//   }
// });

// //function to get all the residencies
// export const getAllResidencies = asyncHandler(async (req, res) => {
//   const residencies = await prisma.residency.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
//   res.send(residencies);
// });

// //function to get a specific document/residency
// export const getResidency = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   try {
//     const residency = await prisma.residency.findUnique({
//       where: { id },
//     });
//     res.send(residency);
//   } catch (err) {
//     throw new Error(err.message);
//   }
// });

// import asyncHandler from "express-async-handler";
// import { prisma } from "../config/prismaConfig.js";

// export const createResidency = asyncHandler(async (req, res) => {
//   const {
//     title,
//     description,
//     price,
//     address,
//     country,
//     city,
//     facilities,
//     image,
//     userEmail,
//   } = req.body.data;
//   console.log(req.body.data);
//   try {
//     const residency = await prisma.residency.create({
//       data: {
//         title,
//         description,
//         price,
//         address,
//         country,
//         city,
//         facilities,
//         image,
//         owner: { connect: { email: userEmail } },
//       },
//     });

//     res.send({ message: "Residency created successfully" });
//   } catch (err) {
//     if (err.code === "P2002") {
//       // Note: Error code is case sensitive
//       throw new Error("A residency with this address already exists.");
//     }
//     throw new Error(err.message);
//   }
// });

// export const getAllResidencies = asyncHandler(async (req, res) => {
//   const residencies = await prisma.residency.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
//   res.send(residencies);
// });

// export const getResidency = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   try {
//     const residency = await prisma.residency.findUnique({
//       where: { id },
//     });
//     res.send(residency);
//   } catch (err) {
//     throw new Error(err.message);
//   }
// });

import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
  } = req.body.data;

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities: JSON.stringify(facilities), // Ensure facilities are stored as JSON string
        image,
        owner: { connect: { email: userEmail } },
      },
    });

    res.send({ message: "Residency created successfully" });
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("A residency with this address already exists.");
    }
    throw new Error(err.message);
  }
});

export const getAllResidencies = asyncHandler(async (req, res) => {
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send(residencies);
});

export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.findUnique({
      where: { id },
    });
    res.send(residency);
  } catch (err) {
    throw new Error(err.message);
  }
});

// Import statements...

export const searchResidencies = asyncHandler(async (req, res) => {
  const { title, city } = req.query;

  try {
    const residencies = await prisma.residency.findMany({
      where: {
        title: { contains: title || "" },
        city: { contains: city || "" },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.send(residencies);
  } catch (err) {
    throw new Error(err.message);
  }
});

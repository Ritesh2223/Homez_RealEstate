import express from "express";
import {
  createResidency,
  getAllResidencies,
  getResidency,
  searchResidencies,
} from "../controllers/resdCntrl.js";
const router = express.Router();

router.post("/create", createResidency);
router.get("/allresd", getAllResidencies);
router.get("/:id", getResidency);
router.get("/search", searchResidencies);

export { router as residencyRoute };

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
import { userRoute } from "./routes/userRoute.js";
import { residencyRoute } from "./routes/residencyRoute.js";
// import User from "@prisma/client";
import { login, signup } from "./controllers/authCntrl.js";
import { loginUser } from "./controllers/userCntrl.js";
import axios from "axios";

const PORT = process.env.PORT || 5600;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

app.use("/api/user", userRoute);
app.use("/api/residency", residencyRoute);

app.post("/api/login", loginUser);
app.post("/api/signup", signup);

const router = express.Router();

router.post("/google-login", async (req, res) => {
  try {
    const { tokenId } = req.body;

    // Call Google's tokeninfo endpoint to verify the token
    const { data } = await axios.get(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${tokenId}`
    );

    // Verify that the token is valid and obtain user information
    const { sub, email, name } = data;

    // Here, you can perform any additional validation or processing as needed,
    // such as checking if the user already exists in your database

    // Respond with success message or user information
    res.status(200).json({ sub, email, name });
  } catch (error) {
    // Handle errors
    console.error("Google login error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

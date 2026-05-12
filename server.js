import express from "express";
import * as dotenv from "dotenv";
dotenv.config(); // To access .env variables
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
// routes
import jobRouter from "./routes/jobRouter.js";
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware.js";
import { body, validationResult } from "express-validator";

// Condition to log only in development
if (process.env.NODE_ENV === "development") {
  // This package to log info about our request that happened
  app.use(morgan("dev"));
}

// Middleware to parse JSON bodies
app.use(express.json());

app.post(
  "/api/v1/test",
  [
    body("name")
      .notEmpty()
      .withMessage("name is required")
      .isLength({ min: 3 })
      .withMessage("name must be at least 3 character"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessage = errors.array().map((err) => err.msg);
      return res.status(400).json({ errors: errorMessage });
    }

    next();
  },
  (req, res) => {
    const { name } = req.body;
    res.json({ message: `hello ${name}` });
  },
);

app.use("/api/v1/jobs", jobRouter);

// middleware to catch-all requests that doesn't match with the routes above
// standard way to handle 404 ERROR
app.use((req, res) => {
  res.status(404).json({ msg: "not found" });
});

// TRIGGERED BY OUR EXISTING ROUTES IF THERE IS A VALID REQUEST AND HAS AN ERROR
app.use(errorHandlerMiddleware);

/**
 * ========================
 * ========================
 */
const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

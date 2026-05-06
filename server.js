import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();
const app = express();

// routes
import jobRouter from "./routes/jobRouter.js";

// To access .env variables

// Condition to log only in development
if (process.env.NODE_ENV === "development") {
  // This package to log info about our request that happened
  app.use(morgan("dev"));
}

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/v1/jobs", jobRouter);

// middleware to catch-all requests that doesn't match with the routes above
// standard way to handle 404 ERROR
app.use((req, res) => {
  res.status(404).json({ msg: "not found" });
});

// TRIGGERED BY OUR EXISTING ROUTES IF THERE IS A VALID REQUEST AND HAS AN ERROR
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});

/**
 * ========================
 * ========================
 */
const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

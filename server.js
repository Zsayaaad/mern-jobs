import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { nanoid } from "nanoid";

// To access .env variables
dotenv.config();
const app = express();

let jobs = [
  { id: nanoid(), company: "google", position: "front-end" },
  { id: nanoid(), company: "apple", position: "back-end" },
];

// Condition to log only in development
if (process.env.NODE_ENV === "development") {
  // This package to log info about our request that happened
  app.use(morgan("dev"));
}

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From Server");
});

// GET ALL JOBS
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

// CREATE NEW JOB
app.post("/api/v1/createJob", (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res.status(400).json({ msg: "must provide company and position" });
  }

  jobs.push({ id: nanoid(), company: company, position: position });
  res.status(200).json({ jobs });
});

// GET SINGLE JOB
app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) return res.status(404).json({ msg: `no job with id ${id}` });
  res.status(200).json({ job });
});

// EDIT JOB
app.put("/api/v1/jobs/:id", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: "must provide company and position" });
  }

  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) return res.status(404).json({ msg: `no job with id ${id}` });

  job.company = company;
  job.position = position;
  res.status(200).json({ msg: "job modified", job });
});

// DELETE JOB
app.delete("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) return res.status(404).json({ msg: `no job with id ${id}` });

  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;
  res.status(200).json({ msg: "job deleted", newJobs });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

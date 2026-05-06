import jobModel from "../models/jobModel.js";
import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "google", position: "front-end" },
  { id: nanoid(), company: "apple", position: "back-end" },
];

export const getAllJobs = async (req, res) => {
  const jobs = await jobModel.find({});
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  const job = await jobModel.create({ company: company, position: position });
  // const job = await jobModel.create("something");
  res.status(201).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await jobModel.findById(id);
  if (!job) return res.status(404).json({ msg: `no job with id ${id}` });

  res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await jobModel.findByIdAndUpdate(id, req.body, {
    new: true, // to return the updated one
  });

  if (!updatedJob) return res.status(404).json({ msg: `no job with id ${id}` });

  res.status(200).json({ msg: "job modified", job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  const deletedJob = await jobModel.findByIdAndDelete(id);

  if (!deletedJob)
    return res.status(404).json({ msg: `no job with this ID to be deleted` });

  res.status(200).json({ msg: "job deleted", job: deletedJob });
};

import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["Active", "Closed", "Urgent Hiring", "Pending"],
      default: "Active",
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship"],
      default: "Full-time",
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Job", JobSchema);

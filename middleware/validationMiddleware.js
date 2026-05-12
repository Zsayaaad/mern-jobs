import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import mongoose from "mongoose";
import jobModel from "../models/jobModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessage = errors.array().map((err) => err.msg);

        if (errorMessage[0].startsWith("no job")) {
          throw new NotFoundError(errorMessage);
        }

        throw new BadRequestError(errorMessage);
      }

      next();
    },
  ];
};

export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("company is required"),
  body("position").notEmpty().withMessage("position is required"),
  body("jobLocation").notEmpty().withMessage("job location is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("invalid job status"),
  body("jobType").isIn(Object.values(JOB_TYPE)).withMessage("invalid job type"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (val) => {
    const isValidId = mongoose.Types.ObjectId.isValid(val);
    if (!isValidId) throw new BadRequestError("invalid MongoDB id");

    const job = await jobModel.findById(val);
    if (!job) throw new NotFoundError(`no job with id ${val}`);
  }),
]);

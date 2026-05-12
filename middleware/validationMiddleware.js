import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessage = errors.array().map((err) => err.msg);
        throw new BadRequestError(errorMessage);
      }

      next();
    },
  ];
};

export const validateTest = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 3, max: 30 })
    .withMessage("name must be between 3 and 30 characters long")
    .trim(),
]);

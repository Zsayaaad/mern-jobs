import { StatusCodes } from "http-status-codes";
import UserModel from "../models/UserModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";

export const register = async (req, res) => {
  const isFirstAccount = (await UserModel.countDocuments()) === 0;
  const role = isFirstAccount ? "admin" : "user";

  const { name, email, password, lastName, location } = req.body;

  const hashedPassword = await hashPassword(password);

  await UserModel.create({
    name,
    email,
    password: hashedPassword,
    lastName,
    location,
    role: role,
  });
  res.status(StatusCodes.CREATED).json({ msg: "user created successfully" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  const isValidUser = user && (await comparePassword(password, user.password));

  if (!isValidUser) throw new UnauthenticatedError("invalid credentials");

  res.send("login");
};

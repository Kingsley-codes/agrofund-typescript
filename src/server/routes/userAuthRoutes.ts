import express from "express";
import {
  registerUser,
  login,
  registerProducer,
  loginProducer,
} from "../controllers/authControllers.ts";

const userAuthRouter = express.Router();

userAuthRouter.post("/register", registerUser); // User Registration routes

userAuthRouter.post("/login", login); // User Login route

userAuthRouter.post("/producer/register", registerProducer); // producer Registration routes

userAuthRouter.post("/producer/login", loginProducer); // producer Login route

export default userAuthRouter;

import { getspecificUser, login, logout, register } from "./users.controllers.js";
import { Router } from "express";

const userRoutes= Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.post("/logout", logout);
userRoutes.get("/getspecificUser", getspecificUser);

export default userRoutes   
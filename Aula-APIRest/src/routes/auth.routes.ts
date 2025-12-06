import { Router } from "express";
import { createUser, getAllUser, getUserById } from "../services/authService";
const router = Router();

router.post("/login", (_req, res) => {
  res.json({ message: "Login" });
});

router.post("/register", (req, res) => {
  createUser(req, res);
});

router.get("/", (req, res) => {
  getAllUser(req, res);
});

router.get("/:id", (req, res) => {
  getUserById(req, res);
});

router.post("/logout", (_req, res) => {
  res.json({ message: "Logout" });
});
export default router;

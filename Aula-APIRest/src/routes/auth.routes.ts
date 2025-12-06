import { Router } from "express";
import { createUser, login } from "../services/authService";
const router = Router();

router.post("/login", (req, res) => {
  login(req, res);
});

router.post("/register", (req, res) => {
  createUser(req, res);
});

router.post("/logout", (_req, res) => {
  res.json({ message: "Logout" });
});
export default router;

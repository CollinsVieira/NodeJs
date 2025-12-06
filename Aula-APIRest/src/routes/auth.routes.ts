import { Router } from "express";
import { createUser } from "../services/authService";
const router = Router();

router.post("/login", (_req, res) => {
  res.json({ message: "Login" });
});

router.post("/register", (req, res) => {
  createUser(req, res);
});

router.post("/logout", (_req, res) => {
  res.json({ message: "Logout" });
});
export default router;

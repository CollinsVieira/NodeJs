import { Router } from "express";
import { createUser, login } from "../services/authService";
import { validateSchema } from "../middleware/validator";
import { loginSchema, registerSchema } from "../schemas/auth.schema";
const router = Router();

router.post("/login", validateSchema(loginSchema), (req, res) => {
  login(req, res);
});

router.post("/register", validateSchema(registerSchema), (req, res) => {
  createUser(req, res);
});

router.post("/logout", (_req, res) => {
  res.json({ message: "Logout" });
});
export default router;

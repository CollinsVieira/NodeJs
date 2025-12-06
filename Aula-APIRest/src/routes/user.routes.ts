import { Router } from "express";
import { getAllUser, getUserById } from "../services/usuarioService";
const router = Router();

router.get("/", (req, res) => {
  getAllUser(req, res);
});

router.get("/:id", (req, res) => {
  getUserById(req, res);
});

export default router;

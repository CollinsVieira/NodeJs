import { Router } from "express";
import { authMiddleware, requireRole } from "../middleware/authMiddleware";
import { Role } from "../utils/enum";
import {
  getAllClase,
  getClaseById,
  createClase,
  editClase,
  deleteClase,
} from "../services/claseService";
const router = Router();

router.get("/", authMiddleware, (_req, res) => {
  getAllClase(_req, res);
});
router.get("/:id", authMiddleware, (req, res) => {
  getClaseById(req, res);
});
router.post("/", authMiddleware, requireRole(Role.ASESOR), (req, res) => {
  createClase(req, res);
});
router.put("/:id", authMiddleware, requireRole(Role.ASESOR), (req, res) => {
  editClase(req, res);
});
router.delete("/:id", authMiddleware, requireRole(Role.ASESOR), (req, res) => {
  deleteClase(req, res);
});

export default router;

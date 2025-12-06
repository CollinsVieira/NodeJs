import { Router } from "express";
import { authMiddleware, requireRole } from "../middleware/authMiddleware";
import { Role } from "../utils/enum";
import {
  getAllAsesor,
  getAsesorById,
  createAsesor,
  editAsesor,
  deleteAsesor,
} from "../services/asesorService";
const router = Router();

router.get("/", authMiddleware, requireRole(Role.ASESOR), (req, res) => {
  getAllAsesor(req, res);
});
router.get("/:id", (req, res) => {
  getAsesorById(req, res);
});
router.post("/", (req, res) => {
  createAsesor(req, res);
});
router.put("/:id", (req, res) => {
  editAsesor(req, res);
});
router.delete("/:id", (req, res) => {
  deleteAsesor(req, res);
});

export default router;

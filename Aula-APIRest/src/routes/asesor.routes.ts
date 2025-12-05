import { Router } from "express";
import {
  getAllAsesor,
  getAsesorById,
  createAsesor,
  editAsesor,
  deleteAsesor,
} from "../services/asesorService";
const router = Router();

router.get("/", (_req, res) => {
  getAllAsesor(_req, res);
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

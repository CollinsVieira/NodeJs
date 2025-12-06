import { Router } from "express";
import { authMiddleware, requireRole } from "../middleware/authMiddleware";
import { Role } from "../utils/enum";
import {
  getAllCourse,
  getCourseById,
  createCourse,
  editCourse,
  deleteCourse,
} from "../services/courseService";
const router = Router();

router.get("/", authMiddleware, (_req, res) => {
  getAllCourse(_req, res);
});
router.get("/:id", authMiddleware, (req, res) => {
  getCourseById(req, res);
});
router.post("/", authMiddleware, requireRole(Role.ASESOR), (req, res) => {
  createCourse(req, res);
});
router.put("/:id", authMiddleware, requireRole(Role.ASESOR), (req, res) => {
  editCourse(req, res);
});
router.delete("/:id", authMiddleware, requireRole(Role.ASESOR), (req, res) => {
  deleteCourse(req, res);
});

export default router;

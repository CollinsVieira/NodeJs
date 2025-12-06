import { Router } from "express";
import { authMiddleware, requireRole } from "../middleware/authMiddleware";
import { Role } from "../utils/enum";
import {
  getAllTeacher,
  getTeacherById,
  createTeacher,
  editTeacher,
  deleteTeacher,
} from "../services/teacherService";
const router = Router();

router.get("/", authMiddleware, (_req, res) => {
  getAllTeacher(_req, res);
});
router.get("/:id", authMiddleware, (req, res) => {
  getTeacherById(req, res);
});
router.post("/", authMiddleware, requireRole(Role.ASESOR), (req, res) => {
  createTeacher(req, res);
});
router.put("/:id", authMiddleware, requireRole(Role.ASESOR), (req, res) => {
  editTeacher(req, res);
});
router.delete("/:id", authMiddleware, requireRole(Role.ASESOR), (req, res) => {
  deleteTeacher(req, res);
});

export default router;

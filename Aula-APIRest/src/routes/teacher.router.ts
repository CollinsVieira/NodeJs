import { Router } from "express";
import {
  getAllTeacher,
  getTeacherById,
  createTeacher,
  editTeacher,
  deleteTeacher,
} from "../services/teacherService";
const router = Router();

router.get("/", (_req, res) => {
  getAllTeacher(_req, res);
});
router.get("/:id", (req, res) => {
  getTeacherById(req, res);
});
router.post("/", (req, res) => {
  createTeacher(req, res);
});
router.put("/:id", (req, res) => {
  editTeacher(req, res);
});
router.delete("/:id", (req, res) => {
  deleteTeacher(req, res);
});

export default router;

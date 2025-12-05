import { Router } from "express";
import {
  getAllStudent,
  getStudentById,
  createStudent,
  editStudent,
  deleteStudent,
} from "../services/studentService";
const router = Router();

router.get("/", (_req, res) => {
  getAllStudent(_req, res);
});
router.get("/:id", (req, res) => {
  getStudentById(req, res);
});
router.post("/", (req, res) => {
  createStudent(req, res);
});
router.put("/:id", (req, res) => {
  editStudent(req, res);
});
router.delete("/:id", (req, res) => {
  deleteStudent(req, res);
});

export default router;

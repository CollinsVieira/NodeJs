import { Router } from "express";
import {
  getAllCourse,
  getCourseById,
  createCourse,
  editCourse,
  deleteCourse,
} from "../services/courseService";
const router = Router();

router.get("/", (_req, res) => {
  getAllCourse(_req, res);
});
router.get("/:id", (req, res) => {
  getCourseById(req, res);
});
router.post("/", (req, res) => {
  createCourse(req, res);
});
router.put("/:id", (req, res) => {
  editCourse(req, res);
});
router.delete("/:id", (req, res) => {
  deleteCourse(req, res);
});

export default router;

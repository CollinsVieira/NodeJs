import { Router } from "express";
import { authMiddleware, requireRole } from "../middleware/authMiddleware";
import { Role } from "../utils/enum";
import { validateSchema } from "../middleware/validator";
import {
  createStudentSchema,
  updateStudentSchema,
} from "../schemas/student.schema";
import {
  getAllStudent,
  getStudentById,
  createStudent,
  editStudent,
  deleteStudent,
} from "../services/studentService";
const router = Router();

router.get("/", authMiddleware, (_req, res) => {
  getAllStudent(_req, res);
});
router.get("/:id", authMiddleware, (req, res) => {
  getStudentById(req, res);
});
router.post(
  "/",
  authMiddleware,
  requireRole(Role.ASESOR),
  validateSchema(createStudentSchema),
  (req, res) => {
    createStudent(req, res);
  }
);
router.put(
  "/:id",
  authMiddleware,
  requireRole(Role.ASESOR),
  validateSchema(updateStudentSchema),
  (req, res) => {
    editStudent(req, res);
  }
);
router.delete("/:id", authMiddleware, requireRole(Role.ASESOR), (req, res) => {
  deleteStudent(req, res);
});

export default router;

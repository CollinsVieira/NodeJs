import teacherRouter from "../routes/teacher.router";
import studentRouter from "../routes/student.routes";
import claseRouter from "../routes/clase.routes";
import asesorRouter from "../routes/asesor.routes";
import courseRouter from "../routes/course.routes";
import express from "express";
import authRouter from "../routes/auth.routes";

function apiRouter(app: express.Application) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/docente", teacherRouter);
  router.use("/usuario", authRouter);
  router.use("/estudiante", studentRouter);
  router.use("/clase", claseRouter);
  router.use("/asesor", asesorRouter);
  router.use("/curso", courseRouter);
}

export default apiRouter;

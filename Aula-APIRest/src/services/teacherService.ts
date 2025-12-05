import { prisma } from "../lib/prisma";
import { Prisma, type Teacher } from "../generated/prisma/client";

export const getAllTeacher = async function (_req: any, res: any) {
  try {
    const data: Teacher[] = await prisma.teacher.findMany({
      where: {
        estado: "Activo",
      },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
};

export const getTeacherById = async function (req: any, res: any) {
  try {
    const data: Teacher | null = await prisma.teacher.findFirst({
      where: {
        id: parseInt(req.params.id),
        estado: "Activo",
      },
    });
    if (!data) {
      return res.status(404).json({
        error: "no se encontró un estudiante con el id proporcionado",
      });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
};

export const createTeacher = async function (req: any, res: any) {
  try {
    const data: Teacher | null = await prisma.teacher.create({
      data: req.body,
    });
    res.json({
      status: 200,
      message: "creado exitosamente",
      data,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear datos" });
  }
};

export const editTeacher = async function (req: any, res: any) {
  try {
    const data: Teacher | null = await prisma.teacher.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    });
    res.json({
      status: 200,
      message: "editado exitosamente",
      data,
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return res.status(404).json({
        error: "No se encontró un docente con el id proporcionado",
      });
    }
    res.status(500).json({ error: "Error al editar" });
  }
};

export const deleteTeacher = async function (req: any, res: any) {
  try {
    const data: Teacher | null = await prisma.teacher.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        estado: "Inactivo",
      },
    });
    res.json({
      status: 200,
      message: "eliminado exitosamente",
      data: {
        nombre: data.nombre,
      },
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return res.status(404).json({
        error: "No se encontró un docente con el id proporcionado",
      });
    }

    res.status(500).json({ error: "Error al editar" });
  }
};

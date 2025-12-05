import { prisma } from "../lib/prisma";
import { Prisma, type Course } from "../generated/prisma/client";

export const getAllCourse = async function (_req: any, res: any) {
  try {
    const data: Course[] = await prisma.course.findMany({
      where: {
        estado: "Activo",
      },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
};

export const getCourseById = async function (req: any, res: any) {
  try {
    const data: Course | null = await prisma.course.findFirst({
      where: {
        id: parseInt(req.params.id),
        estado: "Activo",
      },
    });
    if (!data) {
      return res.status(404).json({
        error: "no se encontró un curso con el id proporcionado",
      });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
};

export const createCourse = async function (req: any, res: any) {
  try {
    const data: Course | null = await prisma.course.create({
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

export const editCourse = async function (req: any, res: any) {
  try {
    const data: Course | null = await prisma.course.update({
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
        error: "No se encontró un curso con el id proporcionado",
      });
    }

    res.status(500).json({ error: "Error al editar" });
  }
};

export const deleteCourse = async function (req: any, res: any) {
  try {
    const data: Course | null = await prisma.course.update({
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
        error: "No se encontró un curso con el id proporcionado",
      });
    }
    res.status(500).json({ error: "Error al eliminar" });
  }
};

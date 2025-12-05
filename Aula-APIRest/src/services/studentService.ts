import { prisma } from "../lib/prisma";
import { Prisma, type Student } from "../generated/prisma/client";

export const getAllStudent = async function (_req: any, res: any) {
  try {
    const data: Student[] = await prisma.student.findMany({
      where: {
        estado: "Activo",
      },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
};

export const getStudentById = async function (req: any, res: any) {
  try {
    const data: Student | null = await prisma.student.findFirst({
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

export const createStudent = async function (req: any, res: any) {
  try {
    const data: Student | null = await prisma.student.create({
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

export const editStudent = async function (req: any, res: any) {
  try {
    const data: Student | null = await prisma.student.update({
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
        error: "No se encontró un estudiante con el id proporcionado",
      });
    }
    res.status(500).json({ error: "Error al editar" });
  }
};

export const deleteStudent = async function (req: any, res: any) {
  try {
    const data: Student | null = await prisma.student.update({
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
        error: "No se encontró un estudiante con el id proporcionado",
      });
    }

    res.status(500).json({ error: "Error al editar" });
  }
};

import { prisma } from "../lib/prisma";
import { Prisma, type Clase } from "../generated/prisma/client";

export const getAllClase = async function (_req: any, res: any) {
  try {
    const data: Clase[] = await prisma.clase.findMany({
      where: {
        estado: "Activo",
      },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
};

export const getClaseById = async function (req: any, res: any) {
  try {
    const data: Clase | null = await prisma.clase.findFirst({
      where: {
        id: parseInt(req.params.id),
        estado: "Activo",
      },
    });
    if (!data) {
      return res
        .status(404)
        .json({ error: "no se encontró una clase con el id proporcionado" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
};

export const createClase = async function (req: any, res: any) {
  try {
    const data: Clase | null = await prisma.clase.create({
      data: req.body,
    });
    res.json({
      status: 200,
      message: "creado exitosamente",
      data,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear" });
  }
};

export const editClase = async (req: any, res: any) => {
  try {
    const data = await prisma.clase.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    });

    res.json({
      status: 200,
      message: "Editado exitosamente",
      data,
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return res.status(404).json({
        error: "No se encontró una clase con el id proporcionado",
      });
    }

    res.status(500).json({ error: "Error al editar" });
  }
};

export const deleteClase = async function (req: any, res: any) {
  try {
    const data: Clase = await prisma.clase.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        estado: "Inactivo",
      },
    });
    if (!data) {
      return res.status(404).json({
        error: "no se encontró un asesor con el id proporcionado",
      });
    }
    res.json({
      status: 200,
      message: "eliminado exitosamente",
      data: {
        nombre: data.nombreClase,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar" });
  }
};

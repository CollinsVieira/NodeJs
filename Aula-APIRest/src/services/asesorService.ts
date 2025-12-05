import { prisma } from "../lib/prisma";
import { Prisma, type Asesor } from "../generated/prisma/client";

export const getAllAsesor = async function (_req: any, res: any) {
  try {
    const data: Asesor[] = await prisma.asesor.findMany({
      where: {
        estado: "Activo",
      },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
};

export const getAsesorById = async function (req: any, res: any) {
  try {
    const data: Asesor | null = await prisma.asesor.findFirst({
      where: {
        id: parseInt(req.params.id),
        estado: "Activo",
      },
    });
    if (!data) {
      return res
        .status(404)
        .json({ error: "no se encontró un asesor con el id proporcionado" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener" });
  }
};

export const createAsesor = async function (req: any, res: any) {
  try {
    const data: Asesor | null = await prisma.asesor.create({
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

export const editAsesor = async (req: any, res: any) => {
  try {
    const data = await prisma.asesor.update({
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
        error: "No se encontró un asesor con el id proporcionado",
      });
    }

    res.status(500).json({ error: "Error al editar" });
  }
};

export const deleteAsesor = async function (req: any, res: any) {
  try {
    const data: Asesor = await prisma.asesor.update({
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
        nombre: data.nombre,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar" });
  }
};

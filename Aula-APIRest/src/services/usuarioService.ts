import { prisma } from "../lib/prisma";
import { Prisma, type User } from "../generated/prisma/client";

export const getAllUser = async (req: any, res: any) => {
  try {
    const data: User[] = await prisma.user.findMany({
      include: {
        asesor: true,
        teacher: true,
        student: true,
      },
    });
    if (!data) {
      return res.status(404).json({
        error: "No se encontraron datos",
      });
    }
    const safeUsers = data.map(
      ({ password, createdAt, updatedAt, ...rest }) => rest
    );
    res.json({ data: safeUsers });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
};

export const getUserById = async (req: any, res: any) => {
  try {
    const data: User | null = await prisma.user.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
      include: {
        asesor: true,
        teacher: true,
        student: true,
      },
    });
    if (!data) {
      return res.status(404).json({
        error: "No se encontró un usuario con el id proporcionado",
      });
    }
    const { password, createdAt, updatedAt, ...safeUser } = data;
    res.json({ data: safeUser });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
};

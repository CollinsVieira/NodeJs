import { prisma } from "../lib/prisma";
import { Prisma, type User } from "../generated/prisma/client";
import bcrypt from "bcrypt";

export const createUser = async (req: any, res: any) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        role: req.body.role,
      },
    });
    res.json({
      status: 200,
      message: "creado exitosamente",
      data: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

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

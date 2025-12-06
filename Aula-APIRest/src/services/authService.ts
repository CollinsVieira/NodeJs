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

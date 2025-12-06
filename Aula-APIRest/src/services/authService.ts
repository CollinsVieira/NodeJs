import { prisma } from "../lib/prisma";
import { Prisma, type User } from "../generated/prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

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

export const login = async (req: any, res: any) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 1000,
    });
    res.json({
      status: 200,
      message: "login exitoso",
      data: {
        id: user.id,
        username: user.username,
        role: user.role,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};

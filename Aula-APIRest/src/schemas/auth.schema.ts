import { z } from "zod";
import { Role } from "../utils/enum";

export const registerSchema = z.object({
  body: z.object({
    username: z.string().min(3, "El usuario debe tener al menos 3 caracteres"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    role: z.nativeEnum(Role),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    username: z.string().nonempty("El usuario es requerido"),
    password: z.string().nonempty("La contraseña es requerida"),
  }),
});

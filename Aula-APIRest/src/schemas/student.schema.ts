import { z } from "zod";

export const createStudentSchema = z.object({
  body: z.object({
    nombre: z.string().min(2, "El nombre es requerido"),
    apellido: z.string().min(2, "El apellido es requerido"),
    email: z.string().email("Email inválido"),
    gradoAcademico: z.string().min(1, "El grado académico es requerido"),
    dni: z.string().min(8, "DNI inválido").max(8),
    celular: z.string().min(9, "Celular inválido"),
  }),
});

export const updateStudentSchema = z.object({
  body: z.object({
    nombre: z.string().min(2).optional(),
    apellido: z.string().min(2).optional(),
    email: z.string().email().optional(),
    gradoAcademico: z.string().min(1).optional(),
    dni: z.string().min(8).max(8).optional(),
    celular: z.string().min(9).optional(),
  }),
});

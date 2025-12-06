import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const authMiddleware = (req: any, res: any, next: any) => {
  try {
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "No autenticado" });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
};

export const requireRole = (role: string) => {
  return (req: any, res: any, next: any) => {
    if (req.user?.role !== role) {
      return res.status(403).json({ error: "Acceso denegado" });
    }
    next();
  };
};

export default { authMiddleware, requireRole };

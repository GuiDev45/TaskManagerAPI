import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = "super-secret"; // depois move para .env

type JwtPayload = {
  sub: string;
};

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "Token missing" });

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.user = { id: decoded.sub }; // injeta userId
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

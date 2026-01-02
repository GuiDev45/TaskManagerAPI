import type { Request, Response, NextFunction } from "express";

export function fakeAuth(req: Request, _res: Response, next: NextFunction) {
  // userId fixo só para desenvolvimento
  req.userId = "user-123";

  next();
}

import { Request, Response, NextFunction } from "express";
import basicAuth from "basic-auth";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const user = basicAuth(req);
  if (!user || user.name !== "admin" || user.pass !== "password") {
    res.set("WWW-Authenticate", 'Basic realm="KindredTech"');
    res.status(401).send("Authentication required.");
    return;
  }
  next();
};

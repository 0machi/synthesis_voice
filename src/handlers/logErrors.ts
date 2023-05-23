import type { Request, Response, NextFunction } from 'express'

export const logErrors = (err: Error, _req: Request, _res: Response, next: NextFunction): void => {
  console.error(err.stack)
  next(err)
}

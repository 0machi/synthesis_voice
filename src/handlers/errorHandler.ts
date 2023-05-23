import type { Request, Response, NextFunction } from 'express'

export const errorHandler = (_err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  res.status(500).send('Internal Server Error')
}

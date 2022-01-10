import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';

export class CoursePutController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    // throw new Error('Method not implemented.');
    res.status(httpStatus.CREATED).send();
  }
}

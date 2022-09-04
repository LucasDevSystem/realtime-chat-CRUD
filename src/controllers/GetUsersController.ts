import { Request, Response } from "express";
import { GetUsersService } from "../services/GetUsersService";

export class getUsersController {
  async handle(req: Request, res: Response) {
    const service = new GetUsersService();
    const result = await service.execute({});

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.json(result);
  }
}
import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const  userData = req.body;
    const service = new CreateUserService();
    const result = await service.execute(userData);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.json(result);
  }
}

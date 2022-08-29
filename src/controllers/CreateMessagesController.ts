import { CreateMessagesService } from "../services/CreateMessagesService";
import { Request, Response } from "express";

export class CreateMessagesController {
  async handle(req: Request, res: Response) {
    const msgData = req.body;
    const service = new CreateMessagesService();
    const result = await service.execute(msgData);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.json(result);
  }
}

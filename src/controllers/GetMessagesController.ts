import { Request, Response } from "express";
import { GetMessagesService } from "../services/GetMessagesService";

export class GetMessagesController {
  async handle(req: Request, res: Response) {
    const { inbox_id } = req.query;
    const service = new GetMessagesService();

    const result = await service.execute({ inbox_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.json(result);
  }
}

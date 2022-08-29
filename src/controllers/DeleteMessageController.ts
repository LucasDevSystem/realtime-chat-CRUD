import { Request, Response } from "express";
import {DeleteMessageService} from "../services/DeleteMessageService";

export class DeleteMessageController {
  async handle(req: Request, res: Response) {
    const { id = "" } = req.params;
    const service = new DeleteMessageService();
    const result = await service.execute({ id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.status(204).end();
  }
}

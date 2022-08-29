import { Request, Response } from "express";
import { GetInboxService } from "../services/GetInboxService";

export class getInboxController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.query;

    const service = new GetInboxService();
    const result = await service.execute({ user_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.json(result);
  }
}

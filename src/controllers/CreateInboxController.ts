import { Request, Response } from "express";
import { CreateInboxService } from "../services/CreateInboxServices";

export class CreatenboxController {
  async handle(req: Request, res: Response) {
    const inboxData = req.body;
    const service = new CreateInboxService();
    const result = await service.execute(inboxData);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.json(result);
  }
}

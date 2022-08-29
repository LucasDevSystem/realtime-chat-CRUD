import { connectionSource } from "../dataSource";
import { Messages } from "../entities/Messages";

export class DeleteMessageService {
  async execute({ id }): Promise<Messages> {
    try {
      const repo = connectionSource.getRepository(Messages);
      const isValid = await repo.findOne({
        where: { id },
      });
      if (!isValid) return Error("message does not exist");
      
      await repo.delete(id);
    } catch (err) {
      return Error("error");
    }
  }
}

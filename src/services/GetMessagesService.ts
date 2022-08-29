import { connectionSource } from "../dataSource";
import { Messages } from "../entities/Messages";

export class GetMessagesService {
  async execute({ inbox_id}): Promise<Messages> {
    if (!inbox_id) {
      return Error("empty inbox_id");
    }
    const repo = connectionSource.getRepository(Messages);
    const result = await repo.find({
      where: { inbox_id },
    });

    return result;
  }
}

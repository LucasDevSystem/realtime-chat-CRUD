import { connectionSource } from "../dataSource";
import { InboxUsers } from "../entities/InboxUsers";

export class GetInboxUsersService {
  async execute({ user_id }): Promise<InboxUsers> {
    try {
      const repo = connectionSource.getRepository(InboxUsers);

      if (!user_id) {
        return Error("empty user_id");
      }

      const result = await repo.find({
        where: { user: user_id },
      });

      return result;
    } catch (error) {
      return Error("user does not exist");
    }
  }
}
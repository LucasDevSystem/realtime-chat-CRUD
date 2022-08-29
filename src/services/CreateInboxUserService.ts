import { connectionSource } from "../dataSource";
import { Inbox } from "../entities/Inbox";
import { InboxUsers } from "../entities/InboxUsers";
type Data = {
  user: Number;
  inbox_id: String;
};

export class CreateInboxUserService {
  async execute(data: Data): Promise<Inbox> {
    try {
      const { user, inbox_id } = data;
      const repo = connectionSource.getRepository(InboxUsers);
      const isExisting = await repo.findOne({
        where: { user, inbox_id },
      });

      if (isExisting) {
        return isExisting;
      }

      const inboxData = repo.create({ user, inbox_id });
      repo.save(inboxData);

      return inboxData;
    } catch (error) {
      return new Error("error");
    }
  }
}

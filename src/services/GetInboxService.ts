import { connectionSource } from "../dataSource";
import { Inbox } from "../entities/Inbox";
import { GetInboxUsersService } from "./GetInboxUserService";

export class GetInboxService {
  async execute({ user_id }): Promise<Inbox> {
    try {
      const repo = connectionSource.getRepository(Inbox);
      const user = new GetInboxUsersService();
      const inboxes = await user.execute({ user_id });
      let userInbox = [];

      if (!user_id) {
        return Error("user does not exist");
      }
      
      for (const { inbox_id } of inboxes) {
        const res = await repo.find({
          where: { id: inbox_id },
        });
        userInbox.push(res[0]);
      }

      return userInbox;
    } catch (error) {
      return Error("user does not exist");
    }
  }
}

import { connectionSource } from "../dataSource";
import { Inbox } from "../entities/Inbox";
type Data = {
  last_message: String;
  last_sent_user_id: Number,
};

export class CreateInboxService {
  async execute(data: Data): Promise<Inbox> {
    try {
      const {last_message,last_sent_user_id} = data;
      const repo = connectionSource.getRepository(Inbox);

      const inboxData = repo.create({last_message,last_sent_user_id});

      repo.save(inboxData);
     return inboxData;
    } catch (error) {
      return new Error("error");
    }
  }
}



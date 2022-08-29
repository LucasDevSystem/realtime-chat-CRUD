import { connectionSource } from "../dataSource";
import { Inbox } from "../entities/Inbox";

type Data = {
  inbox_id: String;
  last_message: String;
  last_sent_user_id: Number;
};

export class UpdateInboxService {
  async execute(data: Data): Promise<Inbox> {
    try {
      const { inbox_id, last_message, last_sent_user_id } = data;
      const repo = connectionSource.getRepository(Inbox);

      repo.update({ id: inbox_id }, { last_message, last_sent_user_id })
    } catch (error) {
      console.log(error);
    }
  }
}

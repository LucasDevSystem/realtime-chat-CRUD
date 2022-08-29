import { connectionSource } from "../dataSource";
import { Messages } from "../entities/Messages";
import { CreateInboxService } from "./CreateInboxServices";
import { CreateInboxUserService } from "./CreateInboxUserService";
import { UpdateInboxService } from "./UpdateInboxService";

type Data = {
  sender_id: Number;
  receiver_id: Number;
  text: String;
  inbox_id?: String;
};

export class CreateMessagesService {
  async execute(data: Data): Promise<Messages> {
    const { sender_id, receiver_id, text } = data;
    let { inbox_id } = data;

    const repo = connectionSource.getRepository(Messages);
    const inbox = new Inbox();

    if (!inbox_id) {
      //create inbox and inbox users
      inbox_id = await inbox.inbox({ sender_id, text });

      await inbox.user({ inbox_id, sender_id, receiver_id });
    } else {
      await inbox.update({ inbox_id, sender_id, text });
    }
    const msgToSave = repo.create({ ...data, inbox_id: inbox_id });
    repo.save(msgToSave);

    return msgToSave;
  }
}

class Inbox {
  async inbox({ sender_id, text }) {
    const service = new CreateInboxService();
    const result = await service.execute({
      last_message: text,
      last_sent_user_id: sender_id,
    });

    return result.id;
  }

  async user({ inbox_id, sender_id, receiver_id }) {
    const service = new CreateInboxUserService();

    await service.execute({
      inbox_id,
      user: sender_id,
    });

    await service.execute({
      inbox_id,
      user: receiver_id,
    });
  }
  async update({ sender_id, text, inbox_id }) {
    const service = new UpdateInboxService();
    const result = await service.execute({
      inbox_id,
      last_message: text,
      last_sent_user_id: sender_id,
    });

    return result;
  }
}

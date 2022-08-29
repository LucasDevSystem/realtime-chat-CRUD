import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("inbox")
export class Inbox {
  @PrimaryColumn()
  id: String;
  @Column()
  last_message: String;
  @Column()
  last_sent_user_id: Number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

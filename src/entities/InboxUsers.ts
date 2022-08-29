import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("inbox_users")
export class InboxUsers {
  @PrimaryColumn()
  id: String;
  @Column()
  inbox_id: String;
  @Column()
  user: String;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
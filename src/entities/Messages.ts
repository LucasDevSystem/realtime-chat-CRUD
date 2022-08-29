import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("messages")
export class Messages {
  @PrimaryColumn()
  id: String;
  @Column()
  inbox_id: String;
  @Column()
  sender_id: Number;
  @Column()
  receiver_id: Number;
  @Column()
  text: String;
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }

  }
}
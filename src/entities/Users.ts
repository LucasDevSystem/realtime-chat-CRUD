import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class Users {
  @PrimaryGeneratedColumn('increment')
  user_id: Number;
  @Column()
  id: String;
  @Column()
  user_name: String;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

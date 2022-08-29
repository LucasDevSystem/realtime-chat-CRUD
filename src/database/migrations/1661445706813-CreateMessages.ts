import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMessages1661445706813 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "messages",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "inbox_id",
            type: "uuid",
          },
          {
            name: "sender_id",
            type: "int",
          },
          {
            name: "receiver_id",
            type: "int",
          },
          {
            name: "text",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("messages");
  }
}

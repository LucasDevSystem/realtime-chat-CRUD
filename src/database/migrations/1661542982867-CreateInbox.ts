import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateInbox1661542982867 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "inbox",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "last_message",
            type: "varchar",
          },
          {
            name: "last_sent_user_id",
            type: "varchar",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("inbox");
  }
}

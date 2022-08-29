import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateInboxUsers1661626884563 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "inbox_users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "inbox_id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user",
            type: "int",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("inbox_users");
  }
}

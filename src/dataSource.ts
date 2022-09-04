import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
  migrationsTableName: "migrations",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "crud",
  logging: false,
  synchronize: false,
  name: "default",
  migrations: ["src/database/migrations/*.ts"],
  entities: ["src/entities/*.ts"],
});

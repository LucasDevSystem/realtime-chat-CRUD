import { connectionSource } from "../dataSource";
import { Users } from "../entities/Users";

export class GetUsersService {
  async execute({}): Promise<Users> {
    try {
      const repo = connectionSource.getRepository(Users);

      const result = await repo.find({});

      return result;
    } catch (error) {
      return Error("user does not exist");
    }
  }
}

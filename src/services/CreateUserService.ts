import { connectionSource } from "../dataSource";
import { Users } from "../entities/Users";
type Data = {
  user_name: String;
};

export class CreateUserService {
  async execute(data: Data): Promise<Users> {
    try {
      const { user_name } = data;
      const repo = connectionSource.getRepository(Users);
      const isExisting = await repo.findOne({
        where: { user_name },
      });
      if (isExisting) {
        return isExisting;
      }
      const userData = repo.create({ user_name });
      const user = repo.save(userData, { updateAllColumns: true });

      return user;
    } catch (error) {
      return new Error("error");
    }
  }
}

import { User } from "src/domain/user/user.entity";

export interface UserRepository {
    findOne(username: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
    create(user: User): Promise<User>;
  }
  
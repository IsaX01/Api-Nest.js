import { Injectable } from '@nestjs/common';
import { User } from '../domain/user/user.entity';
import { UserRepository } from '../domain/user/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne(username);
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.create(user);
  }
}

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { User } from '../../domain/user/user.entity';
import { UserService } from '../../application/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':username')
  async getUser(@Param('username') username: string): Promise<User | undefined> {
    return this.userService.findOne(username);
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }
}

import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from '../../application/user.service';
import { UserRepository } from '../../domain/user/user.repository';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}

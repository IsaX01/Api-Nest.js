import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from '../../application/user.service';
import { UserRepository } from '../../domain/user/user.repository';
import { jwtConstants } from './constans';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    UserService,
    {
      provide: UserRepository,
      useClass: UserRepository, // Replace with actual implementation
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}

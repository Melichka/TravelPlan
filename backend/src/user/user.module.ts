import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'src/entities/User';
import { UserController } from './user.controller';
import { UserService } from './user.service';

import { AuthService } from '../auth/auth.service';

import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UserController],
  providers: [AuthService, UserService],
  exports: [UserService, UserService.getUserRepository],
})
export class UserModule {}

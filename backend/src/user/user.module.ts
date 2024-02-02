import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  // controllers: [MenuController],
  // providers: [MenuService],
})
export class UserModule {}

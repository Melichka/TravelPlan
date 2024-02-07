import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entertainment } from '../entities/Entertainment';

@Module({
  imports: [TypeOrmModule.forFeature([Entertainment])],
  // controllers: [MenuController],
  // providers: [MenuService],
})
export class EntertainmentModule {}
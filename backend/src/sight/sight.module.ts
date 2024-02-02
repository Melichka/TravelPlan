import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sight } from '../entities/Sight';

@Module({
  imports: [TypeOrmModule.forFeature([Sight])],
  // controllers: [MenuController],
  // providers: [MenuService],
})
export class SightModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from '../entities/Tag';

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  // controllers: [MenuController],
  // providers: [MenuService],
})
export class TagModule {}

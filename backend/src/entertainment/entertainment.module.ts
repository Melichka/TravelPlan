import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Entertainment } from '../entities/Entertainment';

import { EntertainmentService } from './entertainment.service';
import { EntertainmentController } from './entertainment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Entertainment])],
  controllers: [EntertainmentController],
  providers: [EntertainmentService],
})
export class EntertainmentModule {}

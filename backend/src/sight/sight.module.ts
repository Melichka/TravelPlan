import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Sight } from 'src/entities/Sight';
import { SightController } from './sight.controller';
import { SightService } from './sight.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sight])],
  controllers: [SightController],
  providers: [SightService],
})
export class SightModule {}

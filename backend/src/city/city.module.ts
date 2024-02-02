import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from '../entities/City';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  // controllers: [MenuController],
  // providers: [MenuService],
})
export class CityModule {}

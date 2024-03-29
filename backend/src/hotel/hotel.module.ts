import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from '../entities/Hotel';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel])],
  // controllers: [MenuController],
  // providers: [MenuService],
})
export class HotelModule {}

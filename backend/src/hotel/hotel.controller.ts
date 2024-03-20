import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';

import { HotelService } from './hotel.service';
import { Hotel } from 'src/entities/Hotel';

@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get()
  async findAll(): Promise<Hotel[]> {
    return this.hotelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Hotel> {
    const hotel = await this.hotelService.findOne(id);
    if (!hotel) {
      throw new NotFoundException('Hotel does not exist!');
    } else {
      return hotel;
    }
  }

  @Post()
  async create(@Body() hotel: Hotel): Promise<Hotel> {
    return this.hotelService.create(hotel);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() hotel: Hotel): Promise<any> {
    return this.hotelService.update(id, hotel);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const hotel = await this.hotelService.findOne(id);
    if (!hotel) {
      throw new NotFoundException('Hotel does not exist!');
    }
    return this.hotelService.delete(id);
  }
}

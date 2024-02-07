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

import { City } from 'src/entities/City';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async findAll(): Promise<City[]> {
    return this.cityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<City> {
    const city = await this.cityService.findOne(id);
    if (!city) {
      throw new NotFoundException('City does not exist!');
    } else {
      return city;
    }
  }

  @Post()
  async create(@Body() entertainment: City): Promise<City> {
    return this.cityService.create(entertainment);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() city: City): Promise<any> {
    return this.cityService.update(id, city);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const city = await this.cityService.findOne(id);
    if (!city) {
      throw new NotFoundException('City does not exist!');
    }
    return this.cityService.delete(id);
  }
}

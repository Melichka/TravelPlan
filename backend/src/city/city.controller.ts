import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';

import { City } from 'src/entities/City';
import { CityService } from './city.service';
import { AdminGuard } from 'src/guards/admin.guard';

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

  @Get('searchid/:id')
  async findOneWithTags(@Param('id') id: number): Promise<City> {
    return this.cityService.findOneWithTags(id); // Вызываем метод сервиса
  }

  @Post()
  @UseGuards(AdminGuard)
  async create(@Body() entertainment: City): Promise<City> {
    return this.cityService.create(entertainment);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() city: City): Promise<any> {
    return this.cityService.update(id, city);
  }

  @Get('search/:name')
  searchByName(@Param('name') name: string) {
    return this.cityService.searchByName(name);
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

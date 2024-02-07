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

import { SightService } from './sight.service';
import { Sight } from 'src/entities/Sight';

@Controller('sight')
export class SightController {
  constructor(private readonly sightService: SightService) {}

  @Get()
  async findAll(): Promise<Sight[]> {
    return this.sightService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Sight> {
    const sight = await this.sightService.findOne(id);
    if (!sight) {
      throw new NotFoundException('Sight does not exist!');
    } else {
      return sight;
    }
  }

  @Post()
  async create(@Body() sight: Sight): Promise<Sight> {
    return this.sightService.create(sight);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() sight: Sight): Promise<any> {
    return this.sightService.update(id, sight);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const sight = await this.sightService.findOne(id);
    if (!sight) {
      throw new NotFoundException('Sight does not exist!');
    }
    return this.sightService.delete(id);
  }
}

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

import { Entertainment } from 'src/entities/Entertainment';
import { EntertainmentService } from './entertainment.service';

@Controller('entertainment')
export class EntertainmentController {
  constructor(private readonly entertainmentService: EntertainmentService) {}

  @Get()
  async findAll(): Promise<Entertainment[]> {
    return this.entertainmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Entertainment> {
    const entertainment = await this.entertainmentService.findOne(id);
    if (!entertainment) {
      throw new NotFoundException('Entertainment does not exist!');
    } else {
      return entertainment;
    }
  }

  @Post()
  async create(@Body() entertainment: Entertainment): Promise<Entertainment> {
    return this.entertainmentService.create(entertainment);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() entertainment: Entertainment,
  ): Promise<any> {
    return this.entertainmentService.update(id, entertainment);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const entertainment = await this.entertainmentService.findOne(id);
    if (!entertainment) {
      throw new NotFoundException('Entertainment does not exist!');
    }
    return this.entertainmentService.delete(id);
  }
}

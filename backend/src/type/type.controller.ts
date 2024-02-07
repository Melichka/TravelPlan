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

import { TypeService } from './type.service';
import { Type } from 'src/entities/Type';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Get()
  async findAll(): Promise<Type[]> {
    return this.typeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Type> {
    const type = await this.typeService.findOne(id);
    if (!type) {
      throw new NotFoundException('Type does not exist!');
    } else {
      return type;
    }
  }

  @Post()
  async create(@Body() type: Type): Promise<Type> {
    return this.typeService.create(type);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() type: Type): Promise<any> {
    return this.typeService.update(id, type);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const type = await this.typeService.findOne(id);
    if (!type) {
      throw new NotFoundException('Type does not exist!');
    }
    return this.typeService.delete(id);
  }
}

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

import { TagService } from './tag.service';
import { Tag } from 'src/entities/Tag';
import { AdminGuard } from 'src/guards/admin.guard';
import { CreateTagDto } from 'src/dto/createTagDto';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async findAll(): Promise<Tag[]> {
    return this.tagService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Tag> {
    const tag = await this.tagService.findOne(id);
    if (!tag) {
      throw new NotFoundException('Tag does not exist!');
    } else {
      return tag;
    }
  }

  @Post()
  @UseGuards(AdminGuard)
  async create(@Body() createTagDto: CreateTagDto) {
    return this.tagService.create(createTagDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() tag: Tag): Promise<any> {
    return this.tagService.update(id, tag);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const tag = await this.tagService.findOne(id);
    if (!tag) {
      throw new NotFoundException('Tag does not exist!');
    }
    return this.tagService.delete(id);
  }
}

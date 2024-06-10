import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { PlaceService } from './place.service';
import { CreatePlaceDto } from 'src/dto/createPlaceDto';
import { UpdatePlaceDto } from 'src/dto/updatePlaceDto';
import { Place } from 'src/entities/Place';

@Controller('places')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get()
  findAll() {
    return this.placeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placeService.findOne(+id);
  }

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placeService.create(createPlaceDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
    return this.placeService.update(+id, updatePlaceDto);
  }

  @Get('search/:name')
  searchByName(@Param('name') name: string) {
    return this.placeService.searchByName(name);
  }

  @Get('searchid/:id')
  async findOneWithTags(@Param('id') id: number): Promise<Place> {
    return this.placeService.findOneWithTags(id); // Вызываем метод сервиса
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placeService.remove(+id);
  }
}

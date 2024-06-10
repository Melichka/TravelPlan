import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Place } from 'src/entities/Place';
import { CreatePlaceDto } from 'src/dto/createPlaceDto';
import { UpdatePlaceDto } from 'src/dto/updatePlaceDto';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private placeRepository: Repository<Place>,
  ) {}

  async findAll(): Promise<Place[]> {
    return this.placeRepository.find();
  }

  async findOne(id: number): Promise<Place | undefined> {
    return this.placeRepository.findOne({
      where: { id },
      relations: ['tags', 'city', 'type'],
    });
  }

  async searchByName(name: string): Promise<Place[]> {
    return this.placeRepository
      .createQueryBuilder('place')
      .leftJoinAndSelect('place.tags', 'tag') // Присоединяем таблицу тегов к запросу
      .where('place.name LIKE :name', { name: `%${name}%` })
      .getMany();
  }

  async findOneWithTags(id: number): Promise<Place> {
    // Используем QueryBuilder для объединения таблиц городов и тегов
    return this.placeRepository
      .createQueryBuilder('place')
      .leftJoinAndSelect('place.tags', 'tag') // Присоединяем таблицу тегов к запросу
      .where('place.id LIKE :id', { id:`${id }%`}) // Условие поиска по id города
      .getOne(); // Получаем один результат
  }

  async create(createPlaceDto: CreatePlaceDto): Promise<Place> {
    const newPlace = this.placeRepository.create(createPlaceDto);
    return this.placeRepository.save(newPlace);
  }

  async update(
    id: number,
    updatePlaceDto: UpdatePlaceDto,
  ): Promise<Place | undefined> {
    const existingPlace = await this.placeRepository.findOne({ where: { id } });
    if (!existingPlace) {
      return undefined;
    }
    const updatedPlace = Object.assign(existingPlace, updatePlaceDto);
    return this.placeRepository.save(updatedPlace);
  }

  async remove(id: number): Promise<boolean> {
    const deleteResult = await this.placeRepository.delete(id);
    return deleteResult.affected > 0;
  }
}

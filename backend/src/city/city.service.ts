import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

import { City } from 'src/entities/City';
import { CreateCityDto } from 'src/dto/createCityDto';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  async createCity(createCityDto: CreateCityDto): Promise<City> {
    const city = new City();
    city.name = createCityDto.name;
    city.description = createCityDto.description;
    city.imageUrl = createCityDto.imageUrl;
    city.favourite = false;

    return await this.cityRepository.save(city);
  }

  async findAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

  async findOne(id: number): Promise<City> {
    return this.cityRepository.findOne({ where: { id } });
  }

  async create(city: Partial<City>): Promise<City> {
    const newСity = this.cityRepository.create(city);
    return this.cityRepository.save(newСity);
  }

  async update(id: number, city: Partial<City>): Promise<City> {
    await this.cityRepository.update(id, city);
    return this.cityRepository.findOne({ where: { id } });
  }

  async searchByName(name: string): Promise<City[]> {
    // Используйте QueryBuilder для объединения таблиц и выборки тегов вместе с городами
    return this.cityRepository
      .createQueryBuilder('city')
      .leftJoinAndSelect('city.tags', 'tag') // Присоединяем таблицу тегов к запросу
      .where('city.name LIKE :name', { name: `%${name}%` })
      .getMany();
  }

  async findOneWithTags(id: number): Promise<City> {
    // Используем QueryBuilder для объединения таблиц городов и тегов
    return this.cityRepository
      .createQueryBuilder('city')
      .leftJoinAndSelect('city.tags', 'tag') // Присоединяем таблицу тегов к запросу
      .where('city.id LIKE :id', { id:`${id }%`}) // Условие поиска по id города
      .getOne(); // Получаем один результат
  }

  async delete(id: number): Promise<void> {
    await this.cityRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { City } from 'src/entities/City';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

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

  async delete(id: number): Promise<void> {
    await this.cityRepository.delete(id);
  }
}

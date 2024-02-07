import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Sight } from 'src/entities/Sight';

@Injectable()
export class SightService {
  constructor(
    @InjectRepository(Sight)
    private sightRepository: Repository<Sight>,
  ) {}

  async findAll(): Promise<Sight[]> {
    return this.sightRepository.find();
  }

  async findOne(id: number): Promise<Sight> {
    return this.sightRepository.findOne({ where: { id } });
  }

  async create(tag: Partial<Sight>): Promise<Sight> {
    const newsight = this.sightRepository.create(tag);
    return this.sightRepository.save(newsight);
  }

  async update(id: number, tag: Partial<Sight>): Promise<Sight> {
    await this.sightRepository.update(id, tag);
    return this.sightRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.sightRepository.delete(id);
  }
}

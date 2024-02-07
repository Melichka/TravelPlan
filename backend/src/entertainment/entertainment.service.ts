import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Entertainment } from 'src/entities/Entertainment';

@Injectable()
export class EntertainmentService {
  constructor(
    @InjectRepository(Entertainment)
    private entertainmentRepository: Repository<Entertainment>,
  ) {}

  async findAll(): Promise<Entertainment[]> {
    return this.entertainmentRepository.find();
  }

  async findOne(id: number): Promise<Entertainment> {
    return this.entertainmentRepository.findOne({ where: { id } });
  }

  async create(entertainment: Partial<Entertainment>): Promise<Entertainment> {
    const newentertainment = this.entertainmentRepository.create(entertainment);
    return this.entertainmentRepository.save(newentertainment);
  }

  async update(
    id: number,
    entertainment: Partial<Entertainment>,
  ): Promise<Entertainment> {
    await this.entertainmentRepository.update(id, entertainment);
    return this.entertainmentRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.entertainmentRepository.delete(id);
  }
}

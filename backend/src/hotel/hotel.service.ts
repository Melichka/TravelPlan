import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Hotel } from 'src/entities/Hotel';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private hotelRepository: Repository<Hotel>,
  ) {}

  async findAll(): Promise<Hotel[]> {
    return this.hotelRepository.find();
  }

  async findOne(id: number): Promise<Hotel> {
    return this.hotelRepository.findOne({ where: { id } });
  }

  async create(hotel: Partial<Hotel>): Promise<Hotel> {
    const newHotel = this.hotelRepository.create(hotel);
    return this.hotelRepository.save(newHotel);
  }

  async update(id: number, hotel: Partial<Hotel>): Promise<Hotel> {
    await this.hotelRepository.update(id, hotel);
    return this.hotelRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.hotelRepository.delete(id);
  }
}

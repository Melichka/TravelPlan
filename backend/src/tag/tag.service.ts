import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tag } from 'src/entities/Tag';
import { CreateTagDto } from 'src/dto/createTagDto';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  async findAll(): Promise<Tag[]> {
    return this.tagRepository.find();
  }

  async findOne(id: number): Promise<Tag> {
    return this.tagRepository.findOne({ where: { id } });
  }

  async create(createTagDto: CreateTagDto): Promise<Tag> {
    const tag = new Tag();
    tag.name = createTagDto.name;
    return await this.tagRepository.save(tag);
  }

  async update(id: number, tag: Partial<Tag>): Promise<Tag> {
    await this.tagRepository.update(id, tag);
    return this.tagRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.tagRepository.delete(id);
  }
}

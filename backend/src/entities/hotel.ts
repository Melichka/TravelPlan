import { Entity, Column, ManyToMany } from 'typeorm';
import { Place } from './Place';
import { Tag } from './Tag';

@Entity('hotel')
export class Hotel extends Place {
  @Column({ type: 'time' })
  openingTime: string;

  @Column({ type: 'time' })
  closingTime: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @ManyToMany(() => Tag, (tag) => tag.hotels)
  tags: Tag[];
}

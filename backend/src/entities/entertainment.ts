import { Entity, Column, ManyToMany } from 'typeorm';
import { Place } from './Place';
import { Tag } from './Tag';

@Entity('entertainment')
export class Entertainment extends Place {
  @Column({ type: 'time' })
  openingTime: string;

  @Column({ type: 'time' })
  closingTime: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @ManyToMany(() => Tag, (tag) => tag.entertainments)
  tags: Tag[];
}

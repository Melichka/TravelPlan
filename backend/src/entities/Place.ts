import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToOne, JoinTable, JoinColumn } from 'typeorm';
import { Tag } from './Tag';
import { City } from './City';
import { Type } from './Type';

@Entity('place')
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'description', length: 255, nullable: false })
  description: string;

  @Column({ name: 'imgUrl', length: 255, nullable: false })
  imgUrl: string;

  @Column({ name: 'opening_time', type: 'datetime', nullable: true })
  openingTime: Date;

  @Column({ name: 'closing_time', type: 'datetime', nullable: true })
  closingTime: Date;

  @ManyToOne(() => City, (city) => city.places)
  city: City;

  @ManyToMany(() => Tag, (tag) => tag.places)
  @JoinTable({
    name: 'place_tags',
    joinColumn: { name: 'place_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  tags: Tag[];

  @OneToOne(() => Type)
  @JoinColumn({ name: 'place_type_id' })
  type: Type;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Tag } from './Tag';
import { Place } from './Place';

@Entity('city')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 70, nullable: false })
  name: string;

  @Column({ name: 'description', length: 180, nullable: false })
  description: string;

  @Column({ name: 'imageUrl', nullable: false })
  imageUrl: string;

  @Column({ name: 'favourite', nullable: false })
  favourite: boolean;

  @ManyToMany(() => Tag, (tag) => tag.cities)
  tags: Tag[];

  @ManyToMany(() => Place, (place) => place.cities)
  places: Place[];
}

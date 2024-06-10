import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
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
  @JoinTable({
    name: 'city_tags',
    joinColumn: { name: 'city_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  tags: Tag[];

  @OneToMany(() => Place, (place) => place.city)
  places: Place[];
}

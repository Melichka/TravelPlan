import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './User';
import { Place } from './Place';
import { City } from './City';

@Entity('tag')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @ManyToMany(() => User, (user) => user.tags)
  users: User[];

  @ManyToMany(() => Place, (place) => place.tags)
  @JoinTable({
    name: 'tag_places',
    joinColumn: { name: 'tag_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'place_id', referencedColumnName: 'id' },
  })
  places: Place[];

  @ManyToMany(() => City, (city) => city.tags)
  cities: City[];
}

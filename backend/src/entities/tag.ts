import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './User';
import { Sight } from './Sight';
import { Hotel } from './Hotel';
import { Entertainment } from './Entertainment';
import { City } from './City';

@Entity('tag')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @ManyToMany(() => User, (user) => user.tags)
  users: User[];

  @ManyToMany(() => City)
  @JoinTable({
    name: 'tag_city',
    joinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'city_id',
      referencedColumnName: 'id',
    },
  })
  cities: City[];

  @ManyToMany(() => Entertainment)
  @JoinTable({
    name: 'tag_entertainment',
    joinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'entertainment_id',
      referencedColumnName: 'id',
    },
  })
  entertainments: Entertainment[];

  @ManyToMany(() => Hotel)
  @JoinTable({
    name: 'tag_hotel',
    joinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'hotel_id',
      referencedColumnName: 'id',
    },
  })
  hotels: Hotel[];

  @ManyToMany(() => Sight)
  @JoinTable({
    name: 'tag_sight',
    joinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'sightseeing_id',
      referencedColumnName: 'id',
    },
  })
  sight: Sight[];
}

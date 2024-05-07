import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  BaseEntity,
  JoinTable,
} from 'typeorm';
import { User } from './User';
import { City } from './City';

@Entity('place')
export class Place extends BaseEntity {
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

  @ManyToMany(() => User, (user) => user.places)
  users: User[];

  @ManyToMany(() => City)
  @JoinTable({
    name: 'place_city',
    joinColumn: {
      name: 'place_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'city_id',
      referencedColumnName: 'id',
    },
  })
  cities: City[];
}

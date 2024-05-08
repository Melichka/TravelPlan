import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { IsEmail, MinLength } from 'class-validator';
import { Tag } from './Tag';
import { Place } from './Place';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @IsEmail()
  @Column({ name: 'name', length: 70, nullable: true })
  name: string;

  @Column({ name: 'surname', length: 70, nullable: true })
  surname: string;

  @Column({ name: 'email', length: 180, nullable: false })
  email: string;

  @MinLength(8, { message: 'Password must no more 8 symbols' })
  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'isAdministrator', nullable: false })
  isAdministrator: boolean;

  @ManyToMany(() => Tag)
  @JoinTable({
    name: 'tag_user',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  tags: Tag[];

  @ManyToMany(() => Place, (place) => place.users)
  @JoinTable({
    name: 'favorite',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'place_id',
      referencedColumnName: 'id',
    },
  })
  places: Place[];

  @Column({
    name: 'refreshToken',
    nullable: true,
  })
  refreshToken: string;
}

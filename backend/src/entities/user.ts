import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 70, nullable: false })
  name: string;

  @Column({ name: 'surname', length: 70, nullable: false })
  surname: string;

  @Column({ name: 'email', length: 180, nullable: false })
  email: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'isAdministrator', nullable: false })
  isAdministrator: boolean;

  @Column({
    name: 'refreshToken',
    nullable: true,
  })
  refreshToken: string;
}

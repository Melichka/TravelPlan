import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('type')
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 70, nullable: false })
  name: string;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hotel')
export class Hotel {
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
}

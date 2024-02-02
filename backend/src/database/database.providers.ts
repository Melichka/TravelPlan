import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Entertainment } from 'src/entities/entertainment';

export const databaseProviders: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db/abobadb',
  entities: [Entertainment],
  synchronize: true,
};

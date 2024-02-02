import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { City } from './entities/city';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'sql.sqlite',
  synchronize: true,
  entities: [City],
};

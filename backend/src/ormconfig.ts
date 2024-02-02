import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { City } from './entities/city';
import { Entertainment } from './entities/entertainment';
import { Hotel } from './entities/hotel';
import { Sight } from './entities/sight';
import { Tag } from './entities/tag';
import { User } from './entities/user';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'sql.sqlite',
  synchronize: true,
  entities: [City, User, Entertainment, Sight, Hotel, Tag],
};

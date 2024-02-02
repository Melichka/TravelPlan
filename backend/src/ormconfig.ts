import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { City } from './entities/City';
import { Entertainment } from './entities/Entertainment';
import { Hotel } from './entities/Hotel';
import { Sight } from './entities/Sight';
import { Tag } from './entities/Tag';
import { User } from './entities/User';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'sql.sqlite',
  synchronize: true,
  entities: [City, User, Entertainment, Sight, Hotel, Tag],
};

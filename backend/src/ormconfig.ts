import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { City } from './entities/City';
import { Entertainment } from './entities/Entertainment';
import { Hotel } from './entities/Hotel';
import { Sight } from './entities/Sight';
import { Tag } from './entities/Tag';
import { User } from './entities/User';

import dotenv from 'dotenv';

dotenv.config();

export const getEnvKey = () => {
  const dbType = process.env.DB_TYPE;
  const dbName = process.env.DB_NAME;

  return { dbType, dbName };
};

export const ormConfig: TypeOrmModuleOptions = {
  type: 'dbType',
  database: 'dbName',
  synchronize: true,
  entities: [City, User, Entertainment, Sight, Hotel, Tag],
};

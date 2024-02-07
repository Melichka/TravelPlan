import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { City } from './entities/City';
import { Entertainment } from './entities/Entertainment';
import { Hotel } from './entities/Hotel';
import { Sight } from './entities/Sight';
import { Tag } from './entities/Tag';
import { User } from './entities/User';
import * as dotenv from 'dotenv';

dotenv.config();

export const getEnvKey = () => {
  const dbName = process.env.DB_NAME;
  return { dbName };
};
const envKeys = getEnvKey();

export const ormConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: envKeys.dbName,
  synchronize: true,
  entities: [City, User, Entertainment, Sight, Hotel, Tag],
};

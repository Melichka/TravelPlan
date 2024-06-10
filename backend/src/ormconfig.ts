import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { City } from './entities/City';
import { Tag } from './entities/Tag';
import { User } from './entities/User';
import * as dotenv from 'dotenv';
import { Place } from './entities/Place';
import { Type } from './entities/Type';

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
  entities: [City, User, Tag, Place, Type],
};

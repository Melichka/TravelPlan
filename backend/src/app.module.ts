import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CityModule } from './city/city.module';
import { EntertainmentModule } from './entertainment/entertainment.module';
import { HotelModule } from './hotel/hotel.module';
import { SightModule } from './sight/sight.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';

import { ormConfig } from './ormconfig';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRoot(ormConfig),
    CityModule,
    EntertainmentModule,
    HotelModule,
    UserModule,
    TagModule,
    SightModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

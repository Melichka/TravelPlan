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

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    CityModule,
    EntertainmentModule,
    HotelModule,
    UserModule,
    TagModule,
    SightModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

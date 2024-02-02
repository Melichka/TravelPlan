import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from './city/city.module';
import { ormConfig } from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

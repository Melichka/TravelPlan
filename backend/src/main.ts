import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { initAdmin } from './init/init-admin';
import { UserService } from './user/user.service';
import { TypeService } from './type/type.service';
import { initTypes } from './init/init-types';
import { Connection } from 'typeorm';
import { initTags } from './init/init-tag';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter());

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Travel Plan')
    .setDescription('The travel plan description')
    .setVersion('1.0')
    .addTag('travel')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const userService = app.get(UserService);
  await initAdmin(userService);

  const typeService = app.get(TypeService);
  await initTypes(typeService);

  const connection = app.get(Connection);
  await initTags(connection);

  await app.listen(8000);
}
bootstrap();

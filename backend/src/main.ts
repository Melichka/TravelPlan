import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { initAdmin } from './init/init-admin';
import { UserService } from './user/user.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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

  await app.listen(8000);
}
bootstrap();

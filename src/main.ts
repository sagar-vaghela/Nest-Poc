import { NestFactory } from '@nestjs/core';
import { SchoolModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(SchoolModule);
  await app.listen(3000);
}
bootstrap();


// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();


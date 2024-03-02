import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppGlobalExceptionFilter } from './app.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AppGlobalExceptionFilter());

  await app.listen(3000);
}
bootstrap();

import { ValidateInputPipe } from './core/pipes/validate.pipe';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidateInputPipe());
  app.enableCors({
    origin: '*',
  });
  await app.listen(process.env.PORT);
  // tslint:disable-next-line: no-console
  console.log(
    '\x1b[35m%s\x1b[0m',
    'Application is running on:',
    `\x1b[36m${await app.getUrl()}\x1b[0m`,
  );
}
bootstrap();

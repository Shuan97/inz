import { ValidateInputPipe } from './core/pipes/validate.pipe';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidateInputPipe());
  app.use(cookieParser());
  app.enableCors({
    origin: 'http://localhost:3000',
    // credentials: false,
  });
  await app.listen(process.env.PORT);
  // tslint:disable-next-line: no-console
  console.log(
    `\x1b[35m[Server] - Application is running on: \x1b[36m${await app.getUrl()}\x1b[0m`,
  );
}
bootstrap();

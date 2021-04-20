import * as dotenv from 'dotenv';
dotenv.config();
import { ValidateInputPipe } from './core/pipes/validate.pipe';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidateInputPipe());
  // app.use(cookieParser());
  app.enableCors({
    origin: 'http://localhost:3000',
    allowedHeaders: [
      // 'Accept',
      'Authorization',
      'Content-Type',
      // 'Origin',
      // 'Cookie',
      // 'Set-Cookie',
      // 'X-Requested-With',
      // 'X-XSRF-TOKEN',
    ],
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
  });
  // app.use((req, res, next) => {
  //   // res.header('Access-Control-Allow-Origin', '*');
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept, Authentication, Set-Cookie',
  //   );
  //   res.header('withCredentials', true);
  //   next();
  // });
  await app.listen(process.env.PORT);
  // tslint:disable-next-line: no-console
  console.log(
    `\x1b[35m[Server] - Application is running on: \x1b[36m${await app.getUrl()}\x1b[0m`,
  );
}
bootstrap();

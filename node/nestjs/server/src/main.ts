import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({ secret: "XiaoT", rolling: true, name: 'xiaot.sid', cookie: { maxAge: 99999999 } })) // rolling 每次请求重置过期时间
  await app.listen(3008);
}
bootstrap();

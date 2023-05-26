import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ExceptionModule } from './exception/exception.module';

@Module({
  imports: [ExceptionModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}

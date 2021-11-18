import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HttpErrorFilter } from './shared/http-error.filter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdeaModule } from './idea/idea.module';
import { LoggingInterception } from './shared/logging.tnerceptor';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), IdeaModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterception,
    },
  ],
})
export class AppModule {}

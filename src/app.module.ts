import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WasabiController } from './wasabi/wasabi.controller';
import { WasabiModule } from './wasabi/wasabi.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';
import { WasabiService } from './wasabi/wasabi.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: `.${process.env.NODE_ENV}.env`, // cloudtype에서 불필요로 판단
    }),
    WasabiModule,
    ScheduleModule.forRoot(),
    TasksModule,
  ],
  controllers: [AppController, WasabiController],
  providers: [AppService, WasabiService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { WasabiService } from 'src/wasabi/wasabi.service';

@Module({
  providers: [TasksService, WasabiService],
})
export class TasksModule {}

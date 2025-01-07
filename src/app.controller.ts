import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // TODO 특정 키워드가 있을 경우에 사용할 수 있도록 해야함
  @Post('/init')
  initFiles() {
    return this.appService.initFile();
  }
  @Get('/quiz_of_week')
  getQuizOfWeek() {
    return this.appService.getQuizData();
  }
  @Get('artwork_of_week')
  getArtOfWeek() {
    return this.appService.getArtWorkData();
  }
}

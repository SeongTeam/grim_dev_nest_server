import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/quiz_of_week')
  getQuizOfWeek() {
    return this.appService.getQuiz();
  }
  @Get('artwork_of_week')
  getArtOfWeek() {
    return this.appService.getArtWork();
  }
}

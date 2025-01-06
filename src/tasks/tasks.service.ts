import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { WasabiService } from 'src/wasabi/wasabi.service';

/**
 * <cron 표현식 설명>
 *  0 8 * * 6: 매주 토요일 오전 8시에 실행.
    - 첫 번째 0: 분.
    - 두 번째 8: 시 (24시간 형식).
    - * *: 매월, 매일.
    - 6: 토요일.
 */
@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  constructor(private readonly wasabiService: WasabiService) {}

  // // 매주 월요일 00:00에 실행되는 작업
  @Cron('0 0 * * 1')
  handleWeeklyTask() {
    this.logger.log('매주 월요일 00:00에 실행 되었습니다.');
    // 여기에 원하는 작업 로직을 추가합니다.
  }
  // @Cron('*/1 * * * *')
  // handleMinTestTask() {
  //   this.logger.log('1분마다 작업 시작');
  //   this.wasabiService.downloadFile(
  //     'bbucket1',
  //     'test1/textfile.txt',
  //     './download/hello_world.txt',
  //   );
  // }
  // 매주 토요일 오전 8시에 실행되는 작업
  // @Cron('0 8 * * 6')
  // handleWeeklySaturDayTask() {
  //   this.logger.log('매주 토요일 8시 작업 시작!!.');

  //   // 여기서 원하는 작업을 실행합니다.
  // }
}

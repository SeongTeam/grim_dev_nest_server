import { Injectable } from '@nestjs/common';
import { artworkData1 } from './data/artwork_of_week';
import { quizData1 } from './data/quiz_of_week';
import { WasabiService } from './wasabi/wasabi.service';
import { GgrimMoment } from './util/ggrim_moment';
import {
  BUCKET_PATH_KEY,
  DOWNLOAD_DESTINATION_PATH,
  WASABI_BUCKET_NAME,
} from './const/env_keys.const';

@Injectable()
export class AppService {
  constructor(private readonly wasabiService: WasabiService) {}
  getHello() {
    return 'Hello';
  }
  //TODO  lastMonday 사용 못함 에러발생
  async initFile() {
    const latestMonday: string = await GgrimMoment.getLatestMonday();
    const artworkFileName: string = `artwork_of_week_${latestMonday}.json`;
    const quizFileName: string = `quiz_of_week_${latestMonday}.json`;

    console.log(`artworkFileName: ${artworkFileName}`);
    console.log(`quizFileName: ${quizFileName}`);

    const artworkResult = this.wasabiService.downloadFile(
      process.env[WASABI_BUCKET_NAME],
      process.env[BUCKET_PATH_KEY] + artworkFileName,
      process.env[DOWNLOAD_DESTINATION_PATH] + artworkFileName,
    );

    const quizResult = this.wasabiService.downloadFile(
      process.env[WASABI_BUCKET_NAME],
      process.env[BUCKET_PATH_KEY] + quizFileName,
      process.env[DOWNLOAD_DESTINATION_PATH] + quizFileName,
    );
  }

  getArtWork() {
    return artworkData1;
  }

  getQuiz() {
    return quizData1;
  }
}

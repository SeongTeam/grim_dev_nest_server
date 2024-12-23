import { Injectable } from '@nestjs/common';
import { artworkData1 } from './data/artwork_of_week';
import { quizData1 } from './data/quiz_of_week';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello';
  }

  getArtWork() {
    return artworkData1;
  }

  getQuiz() {
    return quizData1;
  }
}

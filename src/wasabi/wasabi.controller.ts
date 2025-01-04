import { Controller, Get, Query } from '@nestjs/common';
import { WasabiService } from './wasabi.service';

@Controller('wasabi')
export class WasabiController {
  constructor(private readonly wasabiService: WasabiService) {}

  @Get('download')
  async downloadFile(
    @Query('bucket') bucketName: string,
    @Query('key') key: string,
    @Query('destination') destinationPath: string,
  ): Promise<string> {
    try {
      await this.wasabiService.downloadFile(bucketName, key, destinationPath);
      return `File downloaded successfully to ${destinationPath}`;
    } catch (error) {
      return `Failed to download file: ${error.message}`;
    }
  }
}

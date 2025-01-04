import { Injectable } from '@nestjs/common';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import * as fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

@Injectable()
export class WasabiService {
  private readonly s3: S3Client;

  constructor() {
    this.s3 = new S3Client({
      region: 'ap-northeast-1', // this is Tokyo region
      endpoint: 'https://s3.ap-northeast-1.wasabisys.com', // Tokyo region endpoint
      credentials: {
        accessKeyId: '<accessKeyId>', // Wasabi Access Key
        secretAccessKey: '<secretAccessKey>', // Wasabi Secret Key
      },
    });
  }

  /**
   * 파일 다운로드
   * @param bucketName Bucket's name
   * @param key  File path in bucket (Key)
   * @param destinationPath local storage path
   */
  async downloadFile(
    bucketName: string,
    key: string,
    destinationPath: string,
  ): Promise<void> {
    try {
      const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: key,
      });

      const response = await this.s3.send(command);

      if (response.Body) {
        await pipelineAsync(
          response.Body as NodeJS.ReadableStream,
          fs.createWriteStream(destinationPath),
        );
        console.log(`File downloaded successfully to ${destinationPath}`);
      } else {
        console.error('No file body received from S3.');
      }
    } catch (error) {
      console.error('Error downloading file:', error);
      throw error;
    }
  }
}

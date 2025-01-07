import * as fs from 'fs';
import * as path from 'path';
import { GgrimMoment } from './ggrim_moment';

/**
 * JSON 파일을 읽고 파싱하는 유틸리티 함수
 * @param relativeFilePath 파일의 상대 경로
 * @returns 파싱된 JSON 데이터
 */
export async function readJsonFile<T>(relativeFilePath: string): Promise<T> {
  try {
    const absolutePath = path.resolve(relativeFilePath);
    const data = await fs.promises.readFile(absolutePath, 'utf-8');
    return JSON.parse(data) as T;
  } catch (error) {
    console.error(`Error reading JSON file at ${relativeFilePath}:`, error);
    throw new Error('Unable to read the JSON file.');
  }
}

/**
 * ggrim 프로젝트에서 사용될 함수, readJsonFile()사용
 * @param relativeFilePath 파일의 상대 경로
 * @returns 파싱된 JSON 데이터
 */
export async function readGGrinJsonFile<T>(jsonFileName: string): Promise<T> {
  const lastMonday: string = await GgrimMoment.getLatestMonday();
  const path =
    __dirname.replace('dist/util', 'download') +
    `/week_data/${jsonFileName}_` +
    lastMonday +
    '.json';

  return readJsonFile(path);
}

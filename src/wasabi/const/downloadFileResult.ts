interface DownloadFileResult {
  success: boolean;
  message: string;
  destinationPath?: string;
  error?: any;
}

export default DownloadFileResult;

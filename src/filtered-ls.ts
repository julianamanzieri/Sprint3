import fs from 'fs';
import path from 'path';

const directoryPath = process.argv[2] || __dirname;
const extension = process.argv[3];

function listFilteredFiles(directoryPath: string, fileExtension: string): void {
  fs.readdir(directoryPath, (error, files) => {
    if (error) {
      console.error('There was an error:', error);
      return;
    }
    const listFilteredFiles = files.filter(
      (file) => path.extname(file) === `.${fileExtension}`
    );

    listFilteredFiles.forEach((file) => {
      console.log(file);
    });
  });
}

listFilteredFiles(directoryPath, extension);

export default listFilteredFiles;

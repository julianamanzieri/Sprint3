import listFilteredFiles from '../filtered-ls';
import * as fs from 'fs';

describe('listFilteredFiles', () => {
  test('Should list filtered files in a directory', async () => {
    const extension = 'txt' as string;
    const directoryPath = './' as string;

    const readdirMock = jest.fn((directoryPath: string, callback: Function) => {
      if (typeof directoryPath !== 'string' || directoryPath === '') {
        callback(new Error('Invalid directory path'));
        return;
      }

      const files = ['file1.txt', 'file2.txt', 'file3.pdf'];
      return files;
    });

    readdirMock.mockRestore();

    // Chama a função que está sendo testada
    let result = listFilteredFiles(directoryPath, extension);

    // expect(result).toContain(directoryPath);
  });
});

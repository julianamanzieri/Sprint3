import filterFiles from '../mymodule';

describe('Given a make-it-modular script file', () => {
  test('Should list files in a directory', async () => {
    const directoryPath = './';
    const extension = 'txt';

    // Chama a função que está sendo testada
    const result = await new Promise<string[] | null>((resolve) => {
      filterFiles(directoryPath, extension, (error, files) => {
        if (files) {
          resolve(files);
        } else {
          resolve([]);
        }
      });
    });

    expect(Array.isArray(result)).toBe(true);
  });
});

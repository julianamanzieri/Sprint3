import { execSync } from 'child_process';

describe('Given a my-first-async-io script', () => {
  describe('When it is executed with a path of a text file which contains 6 lines', () => {
    test('Should count the number of newlines in the file', () => {
      const expectedLines = '6';

      const filePath =
        'npx ts-node ./src/my-first-async-io.ts ./src/myFile.txt';

      const result = execSync(filePath).toString().trim();

      expect(result).toContain(expectedLines);
    });
  });
});

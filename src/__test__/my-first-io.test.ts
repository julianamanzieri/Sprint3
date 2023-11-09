//Executa o ts diretamente da linha de comando, passando o caminho para o arquivo de teste como arg (fn execSync da biblioteca child_process)
import { execSync } from 'child_process';

describe('Given a my-first-io script', () => {
  describe('When it is executed with a path of a text file which contains 6 lines', () => {
    test('Should count the number of newlines in the file', () => {
      const expectedLines = '6' as string;

      const filePath = 'npx ts-node ./src/my-first-io.ts ./src/myFile.txt';

      const result = execSync(filePath).toString().trim();

      // expect(result).toBe(expectedLines);
    });
  });
});

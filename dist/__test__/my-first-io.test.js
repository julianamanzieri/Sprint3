"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Executa o ts diretamente da linha de comando, passando o caminho para o arquivo de teste como arg (fn execSync da biblioteca child_process)
const child_process_1 = require("child_process");
describe('Given a my-first-io script', () => {
    describe('When it is executed with a path of a text file which contains 6 lines', () => {
        test('Should count the number of newlines in the file', () => {
            const expectedLines = '6';
            const filePath = 'npx ts-node ./src/my-first-io.ts ./src/myFile.txt';
            const result = (0, child_process_1.execSync)(filePath).toString().trim();
            expect(result).toContain(expectedLines);
        });
    });
});
//# sourceMappingURL=my-first-io.test.js.map
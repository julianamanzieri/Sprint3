"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
describe('Given a http-client script,', () => {
    describe('When it is executed with a url http://www.example.com', () => {
        test('Should handle successful HTTP request', () => {
            const expectedSubstring = 'Example Domain';
            const domain = 'http://www.example.com';
            const command = `npx ts-node ./src/http-client.ts ${domain}`;
            const output = (0, child_process_1.execSync)(command).toString().trim();
            expect(output).toContain(expectedSubstring);
        });
    });
});
//# sourceMappingURL=http-client.test.js.map
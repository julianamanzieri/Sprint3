"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
describe('Given a http-collect script,', () => {
    describe('When it is executed with a url http://www.example.com', () => {
        test('Should handle successful HTTP request and collect data', () => {
            const domain = 'http://www.example.com';
            const command = `npx ts-node ./src/http-collect.ts ${domain}`;
            const output = (0, child_process_1.execSync)(command).toString().trim();
            expect(output).toContain('Example Domain');
        });
    });
});
//# sourceMappingURL=http-collect.test.js.map
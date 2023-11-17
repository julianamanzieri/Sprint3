import { execSync } from 'child_process';

describe('Given a http-client script,', () => {
  describe('When it is executed with a url http://www.example.com', () => {
    test('Should handle successful HTTP request', () => {
      const expectedSubstring = 'Example Domain';
      const domain = 'http://www.example.com';
      const command = `npx ts-node ./src/http-client.ts ${domain}`;

      const output = execSync(command).toString().trim();

      expect(output).toContain(expectedSubstring);
    });
  });
});

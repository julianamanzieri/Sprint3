import http from 'http';
import fs from 'fs';
import { server } from '../http-file-server';

describe('Given a http file server script', () => {
  test('Should return the content of the file', async () => {
    const port = 8000;
    const file = 'test.txt';

    const client = http.get(`http://localhost:${port}/${file}`, (res) => {
      res.setEncoding('utf8');
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const expectedContent = 'Hello';
        expect(data).toBe(expectedContent);
        client.end();
      });
    });

    client.on('error', (error) => {
      console.error(error.message);
    });
  });
});

import http from 'http';
import { server } from '../http-json-api-server';

describe('Given a http-json-api-server script', () => {
  describe('HTTP api server', () => {
    test('Should return the parsed time for a valid ISO parameter', async () => {
      const port = 8000;
      const iso = '2023-04-05T12:34:56.789Z';

      // Crie um cliente para se conectar ao servidor
      const client = http.get(
        `http://localhost:${port}/api/parsetime?iso=${iso}`,
        (res) => {
          res.setEncoding('utf8');

          let data = '';
          res.on('data', (chunk) => {
            data += chunk;
          });

          res.on('end', () => {
            const responseData = JSON.parse(data);
            expect(responseData).toEqual({
              hour: 12,
              minute: 34,
              second: 56
            });
            client.end();
          });
        }
      );

      client.on('error', (error) => {
        console.error(error.message);
      });
    });
  });
});

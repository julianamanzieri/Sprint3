import http from 'http';
import { server } from '../http-uppercaserer';

describe('Given a  http uppercaserer script', () => {
  describe('HTTP server', () => {
    test('Should transform the POST request body to uppercase', async () => {
      const port = 8000;

      // Crie um cliente para se conectar ao servidor
      const client = http.request(
        {
          port,
          method: 'POST'
        },
        (res) => {
          res.setEncoding('utf8');
          let data = '';
          res.on('data', (chunk) => {
            data += chunk;
          });

          res.on('end', () => {
            expect(data).toEqual('HELLO WORLD');
            client.end();
          });
        }
      );

      client.on('error', (error) => {
        console.error(error.message);
      });

      client.write('Hello world');
      client.end();
    });
  });
});

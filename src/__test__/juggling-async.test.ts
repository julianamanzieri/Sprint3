import http from 'http';
import { fetchData } from '../juggling-async';

function createMockServer(data: string, port: number) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  });

  server.listen(port);
  return server;
}

describe('Given a juggling Async Script', (): void => {
  let server1: http.Server;
  let server2: http.Server;
  let server3: http.Server;
  const port1 = 8001;
  const port2 = 8002;
  const port3 = 8003;

  beforeEach(() => {
    server1 = createMockServer('Hello', port1);
    server2 = createMockServer('World', port2);
    server3 = createMockServer('!', port3);
  });

  afterEach(() => {
    server1.close();
    server2.close();
    server3.close();
  });
  test('Should fetch data from three URLs in order', async () => {
    const urls = [
      `http://localhost:${port1}`,
      `http://localhost:${port2}`,
      `http://localhost:${port3}`
    ];

    const spy = jest.spyOn(console, 'log');

    for (let [index, url] of urls.entries()) {
      fetchData(url, index);
    }

    setTimeout(() => {
      expect(spy).toHaveBeenCalledTimes(3);

      expect(spy).toHaveBeenNthCalledWith(1, 'Hello');
      expect(spy).toHaveBeenNthCalledWith(2, 'World');
      expect(spy).toHaveBeenNthCalledWith(3, '!');

      spy.mockRestore();
    });
  });
});

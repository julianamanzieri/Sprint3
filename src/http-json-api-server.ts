import * as http from 'http';
import * as url from 'url';

const port = Number(process.argv[2]) || 8000;

export const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const parsedUrl = new URL(req.url!, 'http://localhost');
    const isoTime = parsedUrl.searchParams.get('iso');

    if (!isoTime) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('ISO parameter missing or invalid');
      return;
    }

    const date = new Date(isoTime);

    let responseData: object | null = null;

    if (parsedUrl.pathname === '/api/parsetime') {
      responseData = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      };
    } else if (parsedUrl.pathname === '/api/unixtime') {
      responseData = {
        unixtime: date.getTime()
      };
    }

    if (responseData !== null) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(responseData));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

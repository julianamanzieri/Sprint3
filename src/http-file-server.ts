import http from 'http';
import fs from 'fs';

const port = process.argv[2];
const file = process.argv[3];

export const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(file);

  readStream.pipe(res);
});

server.listen(port);

server.on('error', (error) => {
  console.error(error.message);
});

import http from 'http';
import map from 'through2-map';

const port = Number(process.argv[2]);

export const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const transform = req.pipe(
      map((chunk: Buffer) => chunk.toString().toUpperCase())
    );
    transform.pipe(res);
  }
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

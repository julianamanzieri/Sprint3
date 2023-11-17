import * as net from 'net';

function zeroFill(i: number): string {
  return (i < 10 ? '0' : '') + i;
}

export function getCurrentTime(): string {
  const d = new Date();
  return `${d.getFullYear()}-${zeroFill(d.getMonth() + 1)}-${zeroFill(
    d.getDate()
  )} ${zeroFill(d.getHours())}:${zeroFill(d.getMinutes())}`;
}

const server = net.createServer((socket) => {
  socket.end(`${getCurrentTime()}\n`);
});

const port = Number(process.argv[2]) || 8000;
server.listen(port);

console.log(`Listening to the port: ${port}`);

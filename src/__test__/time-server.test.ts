import net from 'net';
import { getCurrentTime } from '../time-server';

describe('Given a time server Script', (): void => {
  test('Should return the current time', (done) => {
    const client = net.connect({ port: 8000 }, () => {
      client.on('data', (data) => {
        expect(data.toString()).toContain(getCurrentTime());

        client.end();
      });

      client.on('end', done);
    });
  });
});

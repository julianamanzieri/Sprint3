import http from 'http';

const url: string = process.argv[2];

http.get(url, (res) => {
  res.setEncoding('utf8');
  res.on('data', (data: string) => {
    console.log(data);
  });

  res.on('error', (error) => {
    console.log(error.message);
  });
});

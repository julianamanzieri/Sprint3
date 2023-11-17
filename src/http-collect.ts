import http from 'http';

const url: string = process.argv[2];
let respData: string = '';

http.get(url, (res) => {
  res.setEncoding('utf8');

  res.on('data', (data: string) => {
    respData += data;
  });

  res.on('error', (error) => {
    console.log(error.message);
  });

  res.on('end', () => {
    console.log(respData.length);
    console.log(respData);
  });
});

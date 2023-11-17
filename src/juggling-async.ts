import http from 'http';

const urls = process.argv.slice(2, 5);
const results: string[] = ['', '', ''];
let count = 0;

export const fetchData = (url: string, index: number) => {
  http.get(url, (res) => {
    res.setEncoding('utf-8');

    res.on('error', (error) => {
      console.error(error);
    });

    res.on('data', (chunk: string) => {
      results[index] += chunk;
    });

    res.on('end', () => {
      count++;
      if (count === results.length) {
        results.forEach((content) => {
          console.log(content);
        });
      }
    });
  });
};

urls.forEach((url, index) => {
  fetchData(url, index);
});

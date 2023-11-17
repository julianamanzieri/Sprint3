import fs from 'fs';

const filePath = process.argv[2];

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log(`There was an error: `, err);
  }

  const fileContent = data.toString();
  const newLines = fileContent.split('\n').length - 1;

  console.log(newLines);
});

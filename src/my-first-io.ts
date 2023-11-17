import fs from 'fs';

const filePath = process.argv[2];
const fileContent = fs.readFileSync(filePath, 'utf8');
const newLines = fileContent.split('\n').length - 1;

console.log(newLines);

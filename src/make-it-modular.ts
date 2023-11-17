import filterFiles from './mymodule';

const directory = process.argv[2];
const extension = process.argv[3];

filterFiles(directory, extension, (error, files) => {
  if (error) {
    console.error('There was an error: ', error);
    return;
  }

  if (files) {
    files.forEach((file) => {
      console.log(file);
    });
  } else {
    console.log('No files found.');
  }
});

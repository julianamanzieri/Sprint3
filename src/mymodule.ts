import * as fs from 'fs';
import * as path from 'path';

// Define um tipo para a função de retorno de chamada
type Callback = (
  error: NodeJS.ErrnoException | undefined,
  files?: string[]
) => void;

// Define a função que recebe o caminho do diretorio, a extensão e uma fs de retorno
export = function filterFiles(
  directoryPath: string,
  extension: string,
  callback: Callback
) {
  // Le o conteudo do diretorio e se tiver um erro durante a leitura, a fs de retorno é chamada com o erro
  fs.readdir(directoryPath, (error, files) => {
    if (error) {
      callback(error);
      return;
    }

    // Usa a fs filter do array para filtrar os arquivos correspondentes
    const filteredFiles = files.filter(
      (file) => path.extname(file) === '.' + extension
    );
    callback(undefined, filteredFiles);
  });
};

// export default filterFiles;

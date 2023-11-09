// Fornece funcionalidades para trabalhar com o sistema de arquivos
import fs from 'fs';
// Fornce utilitarios para manipular caminhos de arquivos
import path from 'path';

// Argumentos de linha de comando
const directoryPath = process.argv[2] || __dirname;
const extension = process.argv[3];

// Funçãoq ue aceita dois parametros(um caminho do diretorio a ser lido e a extensão dos arquivos a serem filtrados)
function listFilteredFiles(directoryPath: string, fileExtension: string): void {
  // Le o conteudo do diretorio especificado
  fs.readdir(directoryPath, (error, files) => {
    // Verifica se ocorreu algum erro
    if (error) {
      console.error('There was an error:', error);
      return;
    }
    // Se não houve erro, cria um novo array que contara com nomes de arquivos com extensão especificada
    const listFilteredFiles = files.filter(
      (file) => path.extname(file) === `.${fileExtension}`
    );

    // Itera sobre o array e imprime o nome de cada arquivo no console
    listFilteredFiles.forEach((file) => {
      console.log(file);
    });
  });
}

// Chama a função passando valores lidos na linha de comando
listFilteredFiles(directoryPath, extension);

export default listFilteredFiles;

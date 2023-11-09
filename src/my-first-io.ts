// Importa o modulo fs que contem as funções de sistema de arquivos
import fs from 'fs';

// Obtem o caminho do arquivo a ser lido como primeiro argumento de linha de comando
const filePath = process.argv[2];
// Le o conteudo do arquivo de forma sincrona usando utf-8
const fileContent = fs.readFileSync(filePath, 'utf8');
// Conta o numero de novas linhas no conteudo do arquivo
const newLines = fileContent.split('\n').length - 1;

console.log(newLines);

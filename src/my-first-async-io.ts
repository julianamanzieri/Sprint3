import fs from 'fs';

// Caminho da arquivo como primeiro arg da linha de comando
const filePath = process.argv[2];

// Le o arquivo de forma assincrona
fs.readFile(filePath, (err, data) => {
  //   Se houver um erro, lança uma exceçao
  if (err) {
    console.log(`There was an error: `, err);
  }

  //   Converte os dados em uma string
  const fileContent = data.toString();

  // Conta o numero de novas linhas no conteudo do arquivo
  const newLines = fileContent.split('\n').length - 1;

  console.log(newLines);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// Caminho da arquivo como primeiro arg da linha de comando
const filePath = process.argv[2];
// Le o arquivo de forma assincrona
fs_1.default.readFile(filePath, (err, data) => {
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
//# sourceMappingURL=my-first-async-io.js.map
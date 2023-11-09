"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o modulo fs que contem as funções de sistema de arquivos
const fs_1 = __importDefault(require("fs"));
// Obtem o caminho do arquivo a ser lido como primeiro argumento de linha de comando
const filePath = process.argv[2];
// Le o conteudo do arquivo de forma sincrona usando utf-8
const fileContent = fs_1.default.readFileSync(filePath, 'utf8');
// Conta o numero de novas linhas no conteudo do arquivo
const newLines = fileContent.split('\n').length - 1;
console.log(newLines);
//# sourceMappingURL=my-first-io.js.map
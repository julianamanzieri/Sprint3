"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Fornece funcionalidades para trabalhar com o sistema de arquivos
const fs_1 = __importDefault(require("fs"));
// Fornce utilitarios para manipular caminhos de arquivos
const path_1 = __importDefault(require("path"));
// Argumentos de linha de comando
const directoryPath = process.argv[2] || __dirname;
const extension = process.argv[3];
// Funçãoq ue aceita dois parametros(um caminho do diretorio a ser lido e a extensão dos arquivos a serem filtrados)
function listFilteredFiles(directoryPath, fileExtension) {
    // Le o conteudo do diretorio especificado
    fs_1.default.readdir(directoryPath, (error, files) => {
        // Verifica se ocorreu algum erro
        if (error) {
            console.error('There was an error:', error);
            return;
        }
        // Se não houve erro, cria um novo array que contara com nomes de arquivos com extensão especificada
        const listFilteredFiles = files.filter((file) => path_1.default.extname(file) === `.${fileExtension}`);
        // Itera sobre o array e imprime o nome de cada arquivo no console
        listFilteredFiles.forEach((file) => {
            console.log(file);
        });
    });
}
// Chama a função passando valores lidos na linha de comando
listFilteredFiles(directoryPath, extension);
exports.default = listFilteredFiles;
//# sourceMappingURL=filtered-ls.js.map
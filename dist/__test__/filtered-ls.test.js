"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filtered_ls_1 = __importDefault(require("../filtered-ls"));
const fs = __importStar(require("fs"));
// Cria um grupo de testes
describe('listFilteredFiles', () => {
    test('Should list filtered files in a directory', () => {
        // Define um caminho de diretório que é passado como argumento para a função
        const directoryPath = './';
        // Define uma extensão para usar no teste que é passado como argumento para a função
        const extension = 'txt';
        // Cria uma função simulada que substitui fs.readdir e recebe dois parâmetros
        const readdirMock = jest.fn((directoryPath, callback) => {
            if (typeof directoryPath !== 'string' || directoryPath === '') {
                callback(new Error('Invalid directory path'));
                return;
            }
            // Cria um array fictício de nomes de arquivo que simulam os arquivos que seriam retornados pela leitura do diretório
            const files = ['file1.txt', 'file2.txt', 'file3.pdf'];
            // Chama o callback com null como o primeiro argumento (indicando que não houve erro) e o array de nomes de arquivo como o segundo argumento (simulando os arquivos lidos)
            callback(null, files);
        });
        // Substitui a função fs.readdir por readdirMock usando jest.spyOn e mockImplementation. Isso faz com que a função fs.readdir seja simulada no teste e retorne os arquivos fictícios definidos em 'files'.
        jest.spyOn(fs, 'readdir').mockImplementation(readdirMock);
        // Cria um mock da função console.log para capturar as saídas do console
        const consoleLogMock = jest.spyOn(console, 'log');
        consoleLogMock.mockImplementation();
        // Chama a função que está sendo testada
        (0, filtered_ls_1.default)(directoryPath, extension);
        // Verifica se a função simulada fs.readdir foi chamada com o diretório correto
        expect(readdirMock).toHaveBeenCalledWith(directoryPath);
        // Verifica se a função console.log foi chamada com os arquivos desejados
        expect(consoleLogMock).toHaveBeenCalledWith('file1.txt');
        expect(consoleLogMock).toHaveBeenCalledWith('file2.txt');
        // Verifica se a função console.log não foi chamada com um arquivo indesejado
        expect(consoleLogMock).not.toHaveBeenCalledWith('file3.pdf');
    });
});
//# sourceMappingURL=filtered-ls.test.js.map
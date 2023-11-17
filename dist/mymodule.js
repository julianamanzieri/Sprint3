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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
module.exports = function filterFiles(directoryPath, extension, callback) {
    // Le o conteudo do diretorio e se tiver um erro durante a leitura, a fs de retorno é chamada com o erro
    fs.readdir(directoryPath, (error, files) => {
        if (error) {
            callback(error);
            return;
        }
        // Usa a fs filter do array para filtrar os arquivos correspondentes
        const filteredFiles = files.filter((file) => path.extname(file) === '.' + extension);
        callback(undefined, filteredFiles);
    });
};
// export default filterFiles;
//# sourceMappingURL=mymodule.js.map
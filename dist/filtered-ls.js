"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const directoryPath = process.argv[2] || __dirname;
const extension = process.argv[3];
function listFilteredFiles(directoryPath, fileExtension) {
    fs_1.default.readdir(directoryPath, (error, files) => {
        if (error) {
            console.error('There was an error:', error);
            return;
        }
        const listFilteredFiles = files.filter((file) => path_1.default.extname(file) === `.${fileExtension}`);
        listFilteredFiles.forEach((file) => {
            console.log(file);
        });
    });
}
listFilteredFiles(directoryPath, extension);
exports.default = listFilteredFiles;
//# sourceMappingURL=filtered-ls.js.map
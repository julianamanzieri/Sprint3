"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filtered_ls_1 = __importDefault(require("../filtered-ls"));
describe('listFilteredFiles', () => {
    test('Should list filtered files in a directory', () => __awaiter(void 0, void 0, void 0, function* () {
        const extension = 'txt';
        const directoryPath = './';
        const readdirMock = jest.fn((directoryPath, callback) => {
            if (typeof directoryPath !== 'string' || directoryPath === '') {
                callback(new Error('Invalid directory path'));
                return;
            }
            const files = ['file1.txt', 'file2.txt', 'file3.pdf'];
            return files;
        });
        readdirMock.mockRestore();
        // Chama a função que está sendo testada
        let result = (0, filtered_ls_1.default)(directoryPath, extension);
        // expect(result).toContain(directoryPath);
    }));
});
//# sourceMappingURL=filtered-ls.test.js.map
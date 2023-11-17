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
const mymodule_1 = __importDefault(require("../mymodule"));
describe('Given a make-it-modular script file', () => {
    test('Should list files in a directory', () => __awaiter(void 0, void 0, void 0, function* () {
        const directoryPath = './';
        const extension = 'txt';
        // Chama a função que está sendo testada
        const result = yield new Promise((resolve) => {
            (0, mymodule_1.default)(directoryPath, extension, (error, files) => {
                if (files) {
                    resolve(files);
                }
                else {
                    resolve([]);
                }
            });
        });
        expect(Array.isArray(result)).toBe(true);
    }));
});
//# sourceMappingURL=make-it-modular.test.js.map
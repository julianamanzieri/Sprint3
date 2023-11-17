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
const http_1 = __importDefault(require("http"));
describe('Given a http file server script', () => {
    test('Should return the content of the file', () => __awaiter(void 0, void 0, void 0, function* () {
        const port = 8000;
        const file = 'test.txt';
        const client = http_1.default.get(`http://localhost:${port}/${file}`, (res) => {
            res.setEncoding('utf8');
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                const expectedContent = 'Hello';
                expect(data).toBe(expectedContent);
                client.end();
            });
        });
        client.on('error', (error) => {
            console.error(error.message);
        });
    }));
});
//# sourceMappingURL=http-file-server.test.js.map
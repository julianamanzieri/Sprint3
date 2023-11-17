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
describe('Given a  http uppercaserer script', () => {
    describe('HTTP server', () => {
        test('Should transform the POST request body to uppercase', () => __awaiter(void 0, void 0, void 0, function* () {
            const port = 8000;
            // Crie um cliente para se conectar ao servidor
            const client = http_1.default.request({
                port,
                method: 'POST'
            }, (res) => {
                res.setEncoding('utf8');
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    expect(data).toEqual('HELLO WORLD');
                    client.end();
                });
            });
            client.on('error', (error) => {
                console.error(error.message);
            });
            client.write('Hello world');
            client.end();
        }));
    });
});
//# sourceMappingURL=http-uppercasarer.test.js.map
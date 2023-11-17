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
describe('Given a http-json-api-server script', () => {
    describe('HTTP api server', () => {
        test('Should return the parsed time for a valid ISO parameter', () => __awaiter(void 0, void 0, void 0, function* () {
            const port = 8000;
            const iso = '2023-04-05T12:34:56.789Z';
            // Crie um cliente para se conectar ao servidor
            const client = http_1.default.get(`http://localhost:${port}/api/parsetime?iso=${iso}`, (res) => {
                res.setEncoding('utf8');
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    const responseData = JSON.parse(data);
                    expect(responseData).toEqual({
                        hour: 12,
                        minute: 34,
                        second: 56
                    });
                    client.end();
                });
            });
            client.on('error', (error) => {
                console.error(error.message);
            });
        }));
    });
});
//# sourceMappingURL=http-json-api-server.test.js.map
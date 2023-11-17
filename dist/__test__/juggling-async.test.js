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
const juggling_async_1 = require("../juggling-async");
function createMockServer(data, port) {
    const server = http_1.default.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
    });
    server.listen(port);
    return server;
}
describe('Given a juggling Async Script', () => {
    let server1;
    let server2;
    let server3;
    const port1 = 8001;
    const port2 = 8002;
    const port3 = 8003;
    beforeEach(() => {
        server1 = createMockServer('Hello', port1);
        server2 = createMockServer('World', port2);
        server3 = createMockServer('!', port3);
    });
    afterEach(() => {
        server1.close();
        server2.close();
        server3.close();
    });
    test('Should fetch data from three URLs in order', () => __awaiter(void 0, void 0, void 0, function* () {
        const urls = [
            `http://localhost:${port1}`,
            `http://localhost:${port2}`,
            `http://localhost:${port3}`
        ];
        const spy = jest.spyOn(console, 'log');
        for (let [index, url] of urls.entries()) {
            (0, juggling_async_1.fetchData)(url, index);
        }
        setTimeout(() => {
            expect(spy).toHaveBeenCalledTimes(3);
            expect(spy).toHaveBeenNthCalledWith(1, 'Hello');
            expect(spy).toHaveBeenNthCalledWith(2, 'World');
            expect(spy).toHaveBeenNthCalledWith(3, '!');
            spy.mockRestore();
        });
    }));
});
//# sourceMappingURL=juggling-async.test.js.map
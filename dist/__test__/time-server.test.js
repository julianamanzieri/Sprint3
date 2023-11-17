"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const time_server_1 = require("../time-server");
describe('Given a time server Script', () => {
    test('Should return the current time', (done) => {
        const client = net_1.default.connect({ port: 8000 }, () => {
            client.on('data', (data) => {
                expect(data.toString()).toContain((0, time_server_1.getCurrentTime)());
                client.end();
            });
            client.on('end', done);
        });
    });
});
//# sourceMappingURL=time-server.test.js.map
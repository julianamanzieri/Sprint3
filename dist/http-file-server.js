"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const port = process.argv[2];
const file = process.argv[3];
exports.server = http_1.default.createServer((req, res) => {
    const readStream = fs_1.default.createReadStream(file);
    readStream.pipe(res);
});
exports.server.listen(port);
exports.server.on('error', (error) => {
    console.error(error.message);
});
//# sourceMappingURL=http-file-server.js.map
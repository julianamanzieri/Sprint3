"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const http_1 = __importDefault(require("http"));
const through2_map_1 = __importDefault(require("through2-map"));
const port = Number(process.argv[2]);
exports.server = http_1.default.createServer((req, res) => {
    if (req.method === 'POST') {
        const transform = req.pipe((0, through2_map_1.default)((chunk) => chunk.toString().toUpperCase()));
        transform.pipe(res);
    }
});
exports.server.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
//# sourceMappingURL=http-uppercaserer.js.map
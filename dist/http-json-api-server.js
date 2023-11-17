"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const http = __importStar(require("http"));
const port = Number(process.argv[2]) || 8000;
exports.server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const parsedUrl = new URL(req.url, 'http://localhost');
        const isoTime = parsedUrl.searchParams.get('iso');
        if (!isoTime) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('ISO parameter missing or invalid');
            return;
        }
        const date = new Date(isoTime);
        let responseData = null;
        if (parsedUrl.pathname === '/api/parsetime') {
            responseData = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
        }
        else if (parsedUrl.pathname === '/api/unixtime') {
            responseData = {
                unixtime: date.getTime()
            };
        }
        if (responseData !== null) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(responseData));
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});
exports.server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
//# sourceMappingURL=http-json-api-server.js.map
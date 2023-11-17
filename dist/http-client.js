"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const url = process.argv[2];
http_1.default.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', (data) => {
        console.log(data);
    });
    res.on('error', (error) => {
        console.log(error.message);
    });
});
//# sourceMappingURL=http-client.js.map
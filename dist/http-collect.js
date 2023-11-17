"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const url = process.argv[2];
let respData = '';
http_1.default.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', (data) => {
        respData += data;
    });
    res.on('error', (error) => {
        console.log(error.message);
    });
    res.on('end', () => {
        console.log(respData.length);
        console.log(respData);
    });
});
//# sourceMappingURL=http-collect.js.map
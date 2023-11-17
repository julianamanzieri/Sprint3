"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const http_1 = __importDefault(require("http"));
const urls = process.argv.slice(2, 5);
const results = ['', '', ''];
let count = 0;
const fetchData = (url, index) => {
    http_1.default.get(url, (res) => {
        res.setEncoding('utf-8');
        res.on('error', (error) => {
            console.error(error);
        });
        res.on('data', (chunk) => {
            results[index] += chunk;
        });
        res.on('end', () => {
            count++;
            if (count === results.length) {
                results.forEach((content) => {
                    console.log(content);
                });
            }
        });
    });
};
exports.fetchData = fetchData;
urls.forEach((url, index) => {
    (0, exports.fetchData)(url, index);
});
//# sourceMappingURL=juggling-async.js.map
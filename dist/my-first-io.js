"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const filePath = process.argv[2];
const fileContent = fs_1.default.readFileSync(filePath, 'utf8');
const newLines = fileContent.split('\n').length - 1;
console.log(newLines);
//# sourceMappingURL=my-first-io.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mymodule_1 = __importDefault(require("./mymodule"));
const directory = process.argv[2];
const extension = process.argv[3];
(0, mymodule_1.default)(directory, extension, (error, files) => {
    if (error) {
        console.error('There was an error: ', error);
        return;
    }
    if (files) {
        files.forEach((file) => {
            console.log(file);
        });
    }
    else {
        console.log('No files found.');
    }
});
//# sourceMappingURL=make-it-modular.js.map
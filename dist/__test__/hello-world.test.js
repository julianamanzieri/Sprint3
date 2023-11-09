"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_1 = __importDefault(require("../hello-world"));
describe('Given a hello-world script', () => {
    describe('When it is executed', () => {
        test('Then is should log in to the console', () => {
            //  Verifica se a mensagem não está vazia
            expect(hello_world_1.default).not.toBe('');
            // Verifica se a mensagem é igual a "Hello World"
            expect(hello_world_1.default).toBe('HELLO WORLD');
        });
    });
});
//# sourceMappingURL=hello-world.test.js.map
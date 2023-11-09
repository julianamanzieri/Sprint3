"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baby_steps_1 = __importDefault(require("../baby-steps"));
describe('Given a baby-steps script', () => {
    describe('When it is executed with 1, 2, 3', () => {
        test('Should return the sum of 1, 2 and 3', () => {
            // Chama a função babySteps com or argumentos
            const result = (0, baby_steps_1.default)('1', '2', '3');
            // Verifica o resultado
            expect(result).toBe(6);
        });
    });
});
//# sourceMappingURL=baby-steps.test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define uma função que receb um array
const babySteps = (...args) => {
    // Armazena a soma dos numeros
    let sum = 0;
    // Converte cada argumento em numero e verifica se o numeor e valido
    for (let arg of args) {
        let num = Number(arg);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    // Retorna a soma
    return sum;
};
// Argumentos da linha de comando para remover os dois primeiros elementos
let args = process.argv.slice(2);
console.log(babySteps(...args));
exports.default = babySteps;
//# sourceMappingURL=baby-steps.js.map
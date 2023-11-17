"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const babySteps = (...args) => {
    let sum = 0;
    for (let arg of args) {
        let num = Number(arg);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
};
let args = process.argv.slice(2);
console.log(babySteps(...args));
exports.default = babySteps;
//# sourceMappingURL=baby-steps.js.map
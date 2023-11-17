const babySteps = (...args: string[]): number => {
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

export default babySteps;

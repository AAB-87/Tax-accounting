
let salaries = [];
for (let i = 0; i < 5; i++) {
  salaries.push(10000)
}
for (let i = 0; i < 15; i++) {
  salaries.push(25000)
}
for (let i = 0; i < 40; i++) {
  salaries.push(50000)
}
for (let i = 0; i < 10; i++) {
  salaries.push(100000)
}
let sum = 0
for (let i = 0; i < salaries.length; i++) {
  sum += salaries[i]
}

function taxDeductions(salaries, taxPercentage) {
  let staff = 70;

  const percentageOfAllSalaries = sum / 100 * taxPercentage;
  const averagePercentage = Math.floor(percentageOfAllSalaries / staff);
  return { averagePercentage, percentageOfAllSalaries }
}

paymentFund = taxDeductions(salaries, 20)
console.log(paymentFund);














// console.log(percentageOfAllSalaries) // вызов функции
// let x = paymentFund(salaries[], taxPercentage) // или так
// console.log(x)

// console.log(paymentFund(salaries[], taxPercentage)) // или так

// фунция возвращает объект - return...
// averagePercentage;
// percentageOfAllSalaries;









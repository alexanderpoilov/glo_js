const money = 15,
    income = 'фриланс',
    addExpenses = 'Комуналка, интернет, такси',
    deposit = true,
    mission = 30,
    period = 6,
    budgetDay = money / 30;


console.log(typeof(money) + ', ' + typeof(income) + ', ' + typeof(deposit));
console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев.');
console.log('Цель заработать ' + mission + ' рублей.');
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);

'use strict';

const myMoney = 15,
    income = 'фриланс',
    myAddExpenses = 'Комуналка, интернет, такси',
    myDeposit = true,
    myMission = 30,
    myPeriod = 6,
    myBudgetDay = myMoney / 30;


console.log(typeof(myMoney) + ', ' + typeof(income) + ', ' + typeof(myDeposit));
console.log(myAddExpenses.length);
console.log('Период равен ' + myPeriod + ' месяцев.');
console.log('Цель заработать ' + myMission + ' рублей.');
console.log(myAddExpenses.toLowerCase().split(', '));
console.log(myBudgetDay);

// lesson03

let money = +prompt('Ваш месячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'),
    amount2 = +prompt('Во сколько это обойдется?'),
    budgetMonth = amount1 + amount2,
    budgetDay = Math.floor(money / budgetMonth),
    mission = +prompt('Введите цель заработка (сумма): '),
    period = Math.ceil(mission / budgetMonth);

    console.log(`Бюджет на месяц ${budgetMonth} рублей`);
    console.log(`Цель будет достигнута через ${period} месяцев`);
    console.log(`Боджет на день: ${budgetDay} рублей`);

    if (budgetDay >= 1200) {
        console.log('У вас высокий уровень дохода!');
    } else if (budgetDay >= 600) {
        console.log('У вас средний уровень дохода');
    } else if (budgetDay < 600) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay < 0){
        console.log('Что то пошло не так...');
    }

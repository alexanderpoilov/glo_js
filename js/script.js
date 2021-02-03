'use strict';

const myMoney = 15,
    income = 'фриланс',
    myAddExpenses = 'Комуналка, интернет, такси',
    myDeposit = true,
    myMission = 30,
    myPeriod = 6,
    myBudgetDay = myMoney / 30,
    mission = 20000,
    money = +prompt('Ваш месячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount2 = +prompt('Во сколько это обойдется?'),
    accumulatedMonth = getAccumulatedMonth(),
    period = Math.ceil(mission / accumulatedMonth),
    budgetDay = Math.floor(accumulatedMonth / 30);

function getAccumulatedMonth () {
    return money - getExpensesMonth();
}

let showTypeOf = function (data) {
    return `${data}: ${typeof(data)}`;
};

let getStatusIncome = function () {
    if (budgetDay >= 1200) {
        return 'У вас высокий уровень дохода!';
    } else if (budgetDay >= 600) {
        return 'У вас средний уровень дохода';
    } else if (budgetDay < 600) {
        return 'К сожалению у вас уровень дохода ниже среднего';
    } else if (budgetDay <= 0) {
        return 'Что то пошло не так...';
    }
};

let getExpensesMonth = function () {
    return amount1 + amount2;
};

let getTargetMonth = function () {
    return Math.ceil(mission / accumulatedMonth);
};

console.log(`${showTypeOf(myMoney)}, ${showTypeOf(income)}, ${showTypeOf(myDeposit)}`);
console.log(getExpensesMonth());
console.log(myAddExpenses.toLowerCase().split(', '));
console.log(getTargetMonth());
console.log(budgetDay);
console.log(getStatusIncome());
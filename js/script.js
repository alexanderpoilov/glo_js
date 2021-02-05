'use strict';

const money = +prompt('Ваш месячный доход?'),
    income = 'фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    mission = 50000,
    deposit = confirm('Есть ли у вас депозит в банке?'),
    period = 3,
    expenses1 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount2 = +prompt('Во сколько это обойдется?');

const getExpensesMonth = function () {
    return amount1 + amount2;
};

const getAccumulatedMonth = function () {
    return money - getExpensesMonth();
};

const accumulatedMonth = getAccumulatedMonth(),
    budgetDay = Math.floor(accumulatedMonth / 30);

const getTargetMonth = function () {
    return Math.ceil(mission / accumulatedMonth);
};

const showTypeOf = function (data) {
    return `${data}: ${typeof(data)}`;
};

const getStatusIncome = function () {
    if (budgetDay >= 1200) {
        return 'У вас высокий уровень дохода!';
    } else if (budgetDay >= 600) {
        return 'У вас средний уровень дохода';
    } else if (budgetDay < 600) {
        return 'К сожалению у вас уровень дохода ниже среднего';
    } else {
        return 'Что то пошло не так...';
    }
};

console.log(`${showTypeOf(money)}, ${showTypeOf(income)}, ${showTypeOf(deposit)}`);
console.log(getExpensesMonth());
console.log(addExpenses.toLowerCase().split(', '));
console.log(getTargetMonth());
console.log(budgetDay);
console.log(getStatusIncome());
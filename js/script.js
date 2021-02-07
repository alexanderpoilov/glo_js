'use strict';

const income = 'фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    mission = 50000,
    deposit = confirm('Есть ли у вас депозит в банке?'),
    period = 3;

let expenses = [],
    amount,
    money,
    targetMonth;


const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = function(){
    do{
        money = prompt('Ваш месячный доход?');
    } while (!isNumber(money));
};
start();

const getExpensesMonth = function () {
    let sum = 0;

    for(let i = 0; i < 2; i++) {

        expenses = prompt('Введите обязательную статью расходов?');
        amount = prompt('Во сколько это обойдется?');

        while (!isNumber(amount)) {
            amount = prompt('Во сколько это обойдется?');
        }
    
        sum += parseFloat(amount);
    }

    console.log('sum: ', sum);
    return sum;
};

const getAccumulatedMonth = function () {
    return money - getExpensesMonth();
};


const accumulatedMonth = getAccumulatedMonth(),
    budgetDay = Math.floor(accumulatedMonth / 30);


const getTargetMonth = function () {
    targetMonth = Math.ceil(mission / accumulatedMonth);
    
    if (targetMonth >= 0) {
        console.log('цель будет достигнута!')
    } else {
        console.log('Цель не будет достигнута');
    }
    return targetMonth;
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
console.log(addExpenses.toLowerCase().split(', '));
console.log(getTargetMonth());
console.log(budgetDay);
console.log(getStatusIncome());
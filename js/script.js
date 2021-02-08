'use strict';

let money;

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = function () {
        do {
            money = prompt('Ваш месячный доход?');
        } while (!isNumber(money));
    };
start();


const appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    targetMonth: 0,
    statusIncome: '',
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
            expenses,
            amount;
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for(let i = 0; i < 2; i++) {

            expenses = prompt('Введите обязательную статью расходов?');
            amount = prompt('Во сколько это обойдется?');
    
            while (!isNumber(amount)) {
                amount = prompt('Во сколько это обойдется?');
            }
            
            appData.expenses[expenses] = parseFloat(amount);
        }
    },

    getExpensesMonth: function(){
        let expens;

        for(expens in appData.expenses) {
            appData.expensesMonth += appData.expenses[expens];            
            console.log('appData.expenses[expens]: ', appData.expenses[expens]);
            
        }
        console.log('appData.expensesMonth: ', appData.expensesMonth);
    },

    getBudget: function () {
        appData.budgetMonth += appData.budget - appData.expensesMonth;
        appData.budgetDay += appData.budget / 30;
        console.log('expensesMonth: ', appData.expensesMonth);
        console.log('appData.budgetMonth: ', appData.budgetMonth);

    },

    getTargetMonth: function () {
        appData.targetMonth += Math.ceil(appData.mission / appData.budgetMonth);

        if (appData.targetMonth >= 0) {
            console.log('цель будет достигнута!');
        } else {
            console.log('Цель не будет достигнута');
        }
    },
    getStatusIncome: function () {
        if (appData.budgetDay >= 1200) {
            appData.statusIncome = 'У вас высокий уровень дохода!';
        } else if (appData.budgetDay >= 600) {
            appData.statusIncome = 'У вас средний уровень дохода';
        } else if (appData.budgetDay < 600) {
            appData.statusIncome = 'К сожалению у вас уровень дохода ниже среднего';
        } else {
            appData.statusIncome = 'Что то пошло не так...';
        }
    }
};

appData.asking();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getBudget();
console.log('Траты в месяц: ' + appData.expensesMonth);
console.log('Месяцев на достежение цели: ' + appData.targetMonth);
console.log('Статус доходов: ' + appData.statusIncome);
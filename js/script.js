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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    targetMonth: 0,
    statusIncome: '',
    asking: function () {

        if (confirm('Есть ли у вас дополнительный источник дохода?')) {
            let itemIncome = prompt('Какой у вас дополнительный заработок?', 'редактура');

            while(isNumber(itemIncome)) {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'редактура');
            }

            let cashIncome = prompt('Сколько в месяц вы на это зарабатываете?', '5000');
            
            while(!isNumber(cashIncome)) {
                cashIncome = prompt('Сколько в месяц вы на это зарабатываете?', '5000');
            }

            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'мелкие расходы,кино'),
            expenses,
            amount;
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?', true);

        for (let i = 0; i < 2; i++) {

            expenses = prompt('Введите обязательную статью расходов?', 'детский сад');

            while(isNumber(expenses)) {
                expenses = prompt('Введите обязательную статью расходов?', 'детский сад');
            }

            amount = prompt('Во сколько это обойдется?', 3500);

            while (!isNumber(amount)) {
                amount = prompt('Во сколько это обойдется?');
            }

            appData.expenses[expenses] = parseFloat(amount);
        }
    },

    getExpensesMonth: function () {
        let expens;

        for (expens in appData.expenses) {
            appData.expensesMonth = appData.expenses[expens];

        }
    },

    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budget / 30;
    },

    getTargetMonth: function () {
        appData.targetMonth = Math.ceil(appData.mission / appData.budgetMonth);

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
    },

    getInfoDeposit: function() {

        if(appData.deposit) {
            appData.percentDeposit = prompt('Какой годовой процент?', 10);

            while(!isNumber(appData.percentDeposit)) {
                appData.percentDeposit = prompt('Какой годовой процент?', 10);
            }

            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);

            while(!isNumber(appData.moneyDeposit)) {
                appData.moneyDeposit = prompt('Какой годовой процент?', 10);
            }

        }
    },

    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getBudget();
console.log('Траты в месяц: ' + appData.expensesMonth);
console.log('Месяцев на достежение цели: ' + appData.targetMonth);
console.log('Статус доходов: ' + appData.statusIncome);
console.log('appData.addExpenses: ', appData.addExpenses);

const showFunc = function () {
    console.log('Наша программа включает в себя данные: ');
    for (let key in appData) {
        console.log(key + ':' + appData[key]);
    }
};
showFunc();

const lowerFirstWord = function(array) {
    let newArr = '';

    for (let i = 0; i < array.length; i++) {
        newArr += array[i][0].toUpperCase() + array[i].substring(1) + ', ';
    }

    return newArr;
};

console.log(lowerFirstWord(appData.addExpenses));

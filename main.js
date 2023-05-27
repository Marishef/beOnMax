let money;
let time;

const start = function() {
money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');
return money, time;



}

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpenses: {},
    income: [],
    savings: false,
}


const detectDayBudget = function () {
    for (let i = 0; i < 2; i++) {
        let quest1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
            quest2 = prompt('Во сколько обойдется?', '');
        
        if ( (typeof(quest1)) === 'string' && (typeof(quest1)) != null && 
            (typeof(quest2)) != null && quest1 != '' && quest2 != '' && 
            quest1.length < 50) {
                appData.expenses[quest1] = quest2;
            } else {
                console.log ("bad result");
                i--;
            }
    };
    appData.moneyPerDay = appData.budget/30
    alert ('Ежедневный бюджет: ' + appData.moneyPerDay);
}


const detectLevel = function () {
if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка')
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}
};


const chooseOptExpenses  = function () {
    for (let i = 1; i <= 3; i++) {
        let quest3 = prompt('Статья необязательных расходов?');
    
    appData.optinalExpenses[i] =  quest3;
    }
    console.log(appData.optinalExpenses);
}
chooseOptExpenses();
"use strict";

var money = prompt('Ваш бюджет на месяц?', '');
var time = prompt('Введите дату в формате YYYY-MM-DD', '');
var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optinalExpenses: {},
  income: [],
  savings: false
};
var quest1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    quest2 = prompt('Во сколько обойдется?', ''),
    quest3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    quest4 = prompt('Во сколько обойдется?', '');
appData.expenses.quest1 = quest2;
appData.expenses.quest3 = quest4;
alert(appData.budget / 30);
//# sourceMappingURL=main.dev.js.map

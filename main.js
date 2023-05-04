let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpenses: {},
    income: [],
    savings: false,
}
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

// let i = 0;
// while (i < 2) {
//     let quest1 = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         quest2 = prompt ("Во сколько обойдется?", "");

//     if ( typeof(quest1)==='string' && typeof(quest1) != null && 
//          typeof(quest2) != null && quest1 != "" && quest2 != "" 
//          && quest1.length < 50) {

//         console.log ("done");

//         appData.expenses[quest1] = quest2;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }

// let i = 0;
// do {
//     let quest1 = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         quest2 = prompt ("Во сколько обойдется?", "");

//     if ( typeof(quest1)==='string' && typeof(quest1) != null && 
//          typeof(quest2) != null && quest1 != "" && 
//          quest2 != "" && quest1.length < 50) {

//         console.log ("done");

//         appData.expenses[quest1] = quest2;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);

appData.moneyPerDay = appData.budget/30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка')
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}
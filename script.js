// УРОК 3

let money, time; //объявляем глобальные переменные, а значения будем присваивать внутри функции

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    //пишем проверку чтобы цикл задания вопросов продолжался, если человек введет не цифру или|| оставит пустую строку или|| нажмет кнопку отмена 
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start(); //вызываем нашу функцию







//УРОК 1

// let money = +prompt("Ваш бюджет на месяц?", ''),
//     time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     a2 = prompt("Во сколько обойдется?", ''),
    // a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    // a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;





// выбор обязательных расходов
// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     //условия внутри нашего цикла для проверки введённых данных
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b; 
//     } else {
//         console.log("bad result");
//         i--;
//     }
//     // appData.expenses[a] = b; //пара ключ = значение
// };


// урок 3 - выбор обязательных расходов можно записать в виде функции
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');

        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b; 
        } else {
        i = i - 1;
        }
    }
}
chooseExpenses(); //вызовем функцию чтобы пользователь мог выбрать расходы







// УРОК 2

// Используем цикл WHILE
// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);



// при расчете бюджета много знаков после точки 6.66666666. Можем округлить с методом .tofixed(). Если скобки оставить пустыми, то мы округлим число до ближайшего целого, если поставим (1), то до первого знака после запятой. toFixed меняет значение переменной на строковое значение 
appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}





// УРОК 3. Функция поможет рассчитать накопление депозита, если он есть
// +prompt - плюсик для того чтобы мы получили именно числовое значение

function checkSavings(){
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        // рассчитаем доход за месяц и добавим его в нашу глобальную базу данных appData
        // monthIncome - создаем новое свойство "прибыль за месяц"
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();
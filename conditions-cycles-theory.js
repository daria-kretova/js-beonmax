//УСЛОВИЯ

// if (2*4 == 7) {
//     console.log("Верно!")
// } else {
//     console.log('Неверно!')
// }


let num = 50;

if(num < 49) {
    console.log('Неверно!')
} else if (num > 100) {
    console.log('Много!')
} else {
    console.log('Верно!')
};

// тернарный оператор - потому что участвует три аргумента. Есть еще бинарный и унарный (инкремент или декремент)
(num == 50) ? console.log('Верно!') : console.log('неверно!');


// switch - модификация, которая поддерживаетнесколько if
switch (num) {
    case num < 49:
        console.log('Неверно!');
        break; //директива чтобы отгородить одно условие от другого, чтобы они не выполнялись все разом
    case num > 100:
        console.log('Много!');
        break;
    case num > 80:
        console.log('Много!');
        break;
    case 50: //проверка на соответствие определенному значению
        console.log('Верно!');
        break;
    default:
        console.log("Что-то пошло не так!");
        break;
} 



//ЦИКЛЫ
let num = 50;

// Вариант 1 - WHILE
// while - пока подходит по условию в скобках, выполняй действия
// while (num <55) {
//     console.log(num);
//     num++;
// }


// Вариант 2 - DO
//do - что-то сделать, а потом проверить на условие
do {
    console.log(num);
    num++;
}
while (num <55);


// Вариант 3 - FOR
for (let i = 1; i < 8; i++) {
    if (i == 6) {
        // break прерывает цикл совсем
        continue //прерывает цикл на указанном аргументе и продолжает после него
    }
    console.log(i)
}
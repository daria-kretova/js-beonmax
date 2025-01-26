// переменная Options и объект в фигурные скобки через запятую {ключ: значение, ключ: значение} - свойства объекта

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

// получить ссвойство объекта можно через точку options.name = выведется test или квадратные скобки options[key]

console.log(options.name);
options.bool = false; // добавление свойств объекту
options.colors = { //добавляем еще свойство и внутрь него помещаем объект. в свойство объекта можео вложить любой тип данных. в объекты вкладываем еще объекты
    border: "black",
    bg: "red"
};

delete options.bool; // удаление свойства из объекта

console.log(options);


// key - переменная которая обозначает каждое свойство или каждый методок который у нас есть в объекте - ширина, высота, имя и т.д.
for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length)


// contrl+alt+N - запуск в консоли всей команды на странице





//массивы и псевдомассивы

let arr = [1, 2, 3, 4, 5];
// arr[99] = 99; сторгое указание номера элемента в массиве, если до него данных нет, то будет выводить <94 empty items>
arr.pop(); //удалить элемент последний с конца
arr.push("5"); //добавить элемент с конца, но уже в виде строки
arr.shift(); //удаляет первый жлемент из нашего массива
arr.unshift("1"); //добавляет элементы в начале массива


// перебрать элементы массива с помощью обычного цикла
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // каждый раз когда наш цикл запускается у него вызывается команда консоль лог. берем массив arr и достукиваемся через i до каждого элемента в нашем массиве 
}


// метод forEach
let arr = ["first", 2, 3, "four", 5];
arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + "(массив: " + mass + ')');
});

console.log(arr);

/* Выведется в консоль
0: first(массив: first,2,3,four,5)
1: 2(массив: first,2,3,four,5)
2: 3(массив: first,2,3,four,5)
3: four(массив: first,2,3,four,5)
4: 5(массив: first,2,3,four,5)
[ 'first', 2, 3, 'four', 5 ] */


// метод in of
let mass = [1, 3, 4, 6, 7];
for (let key in mass) {
    console.log(key);
}

/* выведет
0
1
2
3
4 */


let mass = [1, 3, 4, 6, 7];
for (let key of mass) {
    console.log(key);
}

/*выведет
1
3
4
6
7 */



// всё что введет пользователь превратится в массив. split - разъединяет
let ans = prompt("", ""),
    arr = [];

arr = ans.split(',');
console.log(arr);

/* любые данные которые пользователь введет через запятую мы получим как массив данных:
0: "arrrt"
1: "uuuu"
2: "qqqq" */


// метод  .join берет каждый элемент массива и склеивает всё в одну строку
let arr = ["awe", 'ujr', 'pp', 'yyt'],
    i = arr.join(', ');
console.log(i); // выведет в консоль awe, ujr, pp, yyt. Манипуляция строками
console.log(arr); // выведет в консоль [ 'awe', 'ujr', 'pp', 'yyt' ]. Манипуляция массивами



// команда sort - отсортиует данные массива по алфавиту. 
let arr = ["awe", 'zzz', 'pp', 'ddd'],
    i = arr.sort();
console.log(arr); // [ 'awe', 'ddd', 'pp', 'zzz' ]

//Но этот метод сортирует все как строки, поэтому для цифр делаем так
let arr = [1, 15, 4],
    i = arr.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}
console.log(arr); //[ 1, 4, 15 ]


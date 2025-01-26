// переменная Options и объект в фигурные скобки через запятую {ключ: значение, ключ: значение} - свойства объекта

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

// получить ссвойство объекта можно через точку или квадратные скобки options.name = выведется test

console.log(options.name);
options.bool = false; // добавление свойств объекту
options.colors = { //добавляем еще свойство и внутрь него помещаем объект. в свойство объекта можео вложить любой тип данных. в объекты вкладываем еще объекты
    border: "black",
    bg: "red"
};

delete options.bool; // удаление свойства из объекта

console.log(options);


for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length)

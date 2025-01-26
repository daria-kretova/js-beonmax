// call-back позволяет быть уверенными, в том что определенный код не начнет своего исполнения вплоть до того момента пока другой код не завершит свое исполнение
// функция которая должна быть выполнена полсе того как другмя функция завершила свое исполнение. 


function first(){
    //Что-то делаем
    setTimeout( function(){
        console.log(1);
    }, 500); //делает задержку на пол секунды
}

function second(){
    console.log(2);
}

first();
second();
// отработает вначале вторая функция, выведется 2

// Если хотим чтобы в примере вторая функция выполнилась только после первой мы должны задать её как call-back-функцию

function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

// learnJS("JavaScript", function() {
//     console.log("Я прошел 3й урок!")
// })


function done() {
    console.log("Я прошел 3й урок!")
}

learnJS("JavaScript", done);


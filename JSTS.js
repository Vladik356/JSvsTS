// Сложение
function sum(a, b) {
    return a + b;
}
var result = sum(
    document.getElementById("input1").value,
    document.getElementById("input2").value,
)

document.getElementById("result").innerText = result;

// Если впишем числа 4 и 5, то  результат будет 45

//TS

function sum(a: number, b: number): number {
    return a + b;
}

sum(2, 3);   // Работает
sum(2, "3"); // Будет ошибка

// Читабельность кода
//JS

function checkMeJS(check, me) {
    if(check && me) {
        if(check){ ... }
        if(me){ ... }
    }
}

function andCheckMeJS(check, me) {
    if(check && me) {
        if(check){ ... }
        if(me){ ... }
    }
}

function andCheckJS(check, me) {
    if(check && me) {
        if(check){ ... }
        if(me){ ... }
    }
}

//TS
function checkMe(check: CheckObject, me: MeObject) {
    console.log('Удобно');
}
function andCheckMe(check: CheckObject, me: MeObject) {
    console.log('Просто');
}
function andCheckMeToo(check: CheckObject, me: MeObject) {
    console.log('...');
}
// 1. Функции

// Function Expression - нельзя перенести ниже вызова
const greet2 = function greet2(name) {
    console.log('Привет2,', name)
}

greet('Lena')
greet2('Lena')

// Function Declaration - можно перенести ниже вызова
function greet(name) {
    console.log('Привет,', name)
}

// console.log(typeof greet)
// console.dir(greet)

// 2. Анонимные функции
let counter = 0
const interval = setInterval(function() {
    if (counter >= 5) {
        clearInterval(interval)
    } else {
    console.log(++counter)
    }
}, 1000)

// 3. Стрелочные функции
// function greet(name) {
//     console.log('Привет,', name)
// }

const arrow = (name) => {
    console.log('Привет', name)
}
const arrow2 = name => console.log('Привет2', name)
arrow('Aleksei')
arrow2('Aleksei')

const pow2 = num => num ** 2
console.log(pow2(5))

// 4 Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b
console.log(sum())

function sumAll(...all) { // оператор rest (...all) собирает все значения
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5)
console.log(res)

// 5 Замыкания
function createMember(name){
    return function(lastName){
        console.log(name + lastName)
    }
}

const logWhithLastName = createMember('Aleksei')
logWhithLastName('Morozov')
logWhithLastName('Emelyancev')
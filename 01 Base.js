// 1 Переменные
// Сущности для хранения данных
// camelCase - написание имени сущности, когда второе слово без пробела с большой буквы
// var firstName = 'Aleksei'
// let age = 31 // number
// const isProgrammer = true // boolean 

// const _ = 'private'
// const $ = 'some value'

// const if = 'no value' // err
// const withNum5 = '5'
// const 5WithNum = '5' // err
// -----------------


// 2 Мутирование
// const lastName = prompt('Введите фамилию')

// console.log('Имя человека:', firstName)

// alert(firstName + ' ' + lastName)
// -----------------


// 3 Операторы
// let currentYear = 2021
// const birthYear = 1990

// const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(currentYear--)
// console.log(c)
// -------------------


// 4 Типы данных
// const isProgrammer = true
// const name = 'Aleksei'
// const age = 31
// let x
// null
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)
// --------------------


// 5 Приоритет операторов
// const fullAge = 31
// const birthYear = 1990
// const currentYear = 2021

// // > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 31 >= 31 => true
// console.log(isFullAge)

// 5.1 Документация
// Поиск документации "mdn операторы" "mdn ..."
// ---------------------


// 6 Условные операторы
// const courseStatus = 'pending' // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }

// const isReady = true

// if (isReady){
//     console.log('Всё готово!')
// } else {
//     console.log('Всё не готово')
// }

// Тернарное выражение
// isReady ? console.log('Всё готово') : console.log('Всё не готово')

// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1 == num2)
// ----------------------------


// 7 Булевая логика
// true && true // = true
// true && false // = false
// false && false // = false

// true || true // = true
// true || false // = true
// false || false // = false

// true // = true
// !true // = false
// !!true // = true
// -----------------------------


// 8 Функции
// function calculateAge(year){
//     return 2021 - year
// }

// // console.log(calculateAge(1990))
// // console.log(calculateAge(2000))
// // console.log(calculateAge(1995))

// function logInfoAbout(name, year){
//     const age = calculateAge(year)

//     if (age > 0){
//         console.log('Человек по имени', name, 'сейчас имеет возраст', age)
//     } else {
//         console.log('Вообще-то это уже будущее!')
//     }
// }

// logInfoAbout('Aleksei', '1990')
// logInfoAbout('Kate', '2022')
// -------------------------------


// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars[1])
// console.log(cars.length)

// cars[0] = 'Порше'
// console.log(cars[0])

// cars[cars.length] = 'Мазда'
// console.log(cars[3])
// -------------------------------


// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Порше']

// for (let i = 0; i < cars.length; i++) {
//     let car = cars[i]
//     console.log(car)
// }

// for (let car of cars){
//     console.log(car)
// }
// --------------------------------


// 11 Объекты
const person = {
    firstName: 'Aleksei',
    lastName: 'Morozov',
    year: '1990',
    languages: ['Ru', 'En'],
    hasWife: false,
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)

person.greet()
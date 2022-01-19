const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
// const people = [
//     {name: 'Aleksey', budget: 4200},
//     {name: 'Elena', budget: 3500},
//     {name: 'Victoria', budget: 1700},
// ]
// const fib = [1, 1, 2, 3, 5, 8, 13]

// function
// function addItemsToEnd(){
// }

// Method
// cars.push('Рено') // положить в конец массива
// cars.unshift('Волга') // положить в начало массива
// const firstItem = cars.shift() // удаляет первый элемент из массива и возвращает его
// const lastItem = cars.pop() // удаляет последний элемент массива и возвращает его
// console.log(cars)
// console.log(firstItem)
// console.log(lastItem)

// console.log(cars.reverse()) // мутирует массив и переворачивает его
// console.log(cars)

// const index = cars.indexOf('БМВ') // возвращает индекс искомого элемента
// cars[index] = 'Posrsche'
// console.log(cars)

// let findePerson                 // поиск строки с помощью цикла
// for (const person of people){
//     if (person.budget === 3500){
//         findePerson = person
//     }
// }
// console.log(findePerson)

// const index = cars.findIndex('') // поиск элемента циклами
// const index = people.findIndex(function(person){ // поиск элемента с условием, условие возвращаем из функции
//     return person.budget === 3500
// })
// const person = people.find(function(person){ // ищем строку объекта с включенным параметром функции
//     return person.budget === 3500
// })
// console.log(person)
// const person = people.find(person => person.budget === 3500) // сокращенный вариант поиска необходимой строки 
// console.log(person)

// console.log(cars.includes('Мазда')) // спрашиваем есть ли такой элемент

// const upperCaseCars = cars.map(car => { // создаём новый массив
//     return car.toUpperCase() // приводим каждый эелемент массива к верхнему регистру
// })

// const pow2 = num => num ** 2 // создаём функцию для нового массива
// let pow2Fib = fib.map(pow2) // создаём новый массив и каждый элемент возводим в квадрат использую функцию
// const filteredNumbers = pow2Fib.filter(num => num > 20) // создаеём новый массив в переменной с функцией фильтра
// console.log(filteredNumbers)

// const pow2 = num => num ** 2 // создаём функцию для нового массива
// const sqrt = num => Math.sqrt(num) // создаём функцию для нового массива
// const pow2Fib = fib.map(pow2).map(sqrt) // создаём новый массив и каждый элемент возводим в квадрат использую функцию
// console.log(pow2Fib)

// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// let reverseText = text.split('') // делает из строчки массив
// reverseText = reverseText.reverse() // переворачивает массив
// reverseText = reverseText.join('') // превраащет массив в строку
// const reverseText = text.split('').reverse().join('') // применяем все методы в одну строку
// console.log(reverseText)

const people = [
    {name: 'Aleksey', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700},
]

const allBudget = people.filter(person => person.budget > 2000).reduce(function(acc, person) { // фильтруем данные и добавляем функцию по суммированию данных
    acc += person.budget
    return acc
}, 0)
console.log(allBudget)
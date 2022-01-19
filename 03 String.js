// Строки
// const name = 'Aleksei'
// const age = 31

// function getAge() {
//     return age
// }
// использование обратных кавычек упрощает синтаксис подобных конструкций
// мы можем использовать переменные, вызывать функции и использовать тернарные выражения true или false
// let output = `Привет, меня зовут ${name} и мой возраст ${getAge()}`

// let output = `Привет, ${name} и мой возраст ${age < 50 ? 'A' : 'B'}`

// let output = `
// <div>This is div</div>
// <p>This is p</p>
// `

// console.log(output)

// const name = 'Алексей'
// console.log(name.length) // узнать длинну строки в символах
// console.log(name.toUpperCase()) // привести все символы в верхний регистр
// console.log(name.toLowerCase()) // привести все символы в нижний регистр
// console.log(name.charAt(2)) // узнать какой сивол на какой позиции по аналогии с массивом
// console.log(name.indexOf('кес')) // выясняем есть ли в строке эти символы, метод возвращает номер первого элемента при совпадении. -1 означает, что искомое не найдено.
// console.log(name.startsWith('алекс')) // метод для проверки начала строки
// console.log(name.toLowerCase().startsWith('алекс')) // привести строчку к нижнему регистру и провести проверку на начало строки
// console.log(name.startsWith('Алекс')) // по аналогии
// console.log(name.endsWith('ей')) // метод для провреки окончания строки
// console.log(name.repeat(3)) // метод для дублирования строки

// const string = '        password         '
// console.log(string.trim()) // удалить пробелы из строки
// console.log(string.trimRight()) // удалить пробелы слева, справа, вначале, вконце

// АЛЬТЕРНАТИВНЫЙ СИНТАКСИС для разделения переменных в функции
function logPerson(s, name, age) {
    if (age < 0){
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}`
}
const personName = 'Алексей'
const personAge = -311
const output = logPerson`Имя: ${personName}, Возраст ${personAge}!`
console.log(output)
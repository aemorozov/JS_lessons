const person = { // объекты
    name: 'Aleksey', // ключ: значение
    age: 31,
    isProgrammer: true,
    languages: ['ru', 'en'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Computed key',
    greet() { // функции будут являться методами
        console.log('greet from person')
    },
    info() {
        // console.log('this:', this)
        console.log('Информация про человека по имени', this.name) // this указывает на объект внутри которого находится
    }
}

// console.log(person.name) // варианты обращения к ключам объекта
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])

// console.log(person)
// person.greet()

// person.age++ // как можно изменять значения ключей объекта
// person.languages.push('by')
// person['key_4'] = undefined
// console.log(person)

// delete person['key_4'] // удалить ключ под корень
// console.log(person) 

// -------------------------------

// Деструктуризация
// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age: personAge = 10, languages} = person // создать для каждого ключа отдельную переменную одной строкой
// console.log(name, personAge, languages)

// --------------------------------

// Итерации

// console.log(person)
// for (let key in person) { // так делать не стоит, он может заходить в прототип объекта и забирать строки оттуда
//     console.log('Key: ', key)
//     console.log('Value: ', person[key])
// }

// console.log(person)
// for (let key in person) {  
//     if (person.hasOwnProperty(key)) { // делаем проверку на свойство вне прототипа
//         console.log('Key: ', key)
//         console.log('Value: ', person[key])    
//     }
// }

// Object.keys(person).forEach((key) => { // правильней проводить итерацию через Object.keys
//     console.log('Key: ', key)
//     console.log('Value: ', person[key])    
// })

// ------------------------

// Контекст

// person.info()

// const logger = { // создаем объект с методом для вывода ключей объектов
//     keys() {
//         console.log('Object keys:', Object.keys(this))
//     },
//     keysAndValue() { // выводим ключи и значения ключей
//         Object.keys(this).forEach(key => {
//             console.log(`'${key}': ${this[key]}`)
//         })
//     }
// }

// logger.keysAndValue.call(person)
// logger.keysAndValue.call({a: 1, c: 2})

const logger = { 
    keysAndValue() { // выводим ключи и значения ключей
        Object.keys(this).forEach(function(key) { // слово function задаёт свой контекст, поэтому его нужно вставлять в переменную или добавлять bind
            console.log(`'${key}': ${this[key]}`)
        }.bind(this))  // добавляем bind для сохранения контекста
    },
    withParams(top = false, between = false, bottom = false){
        if (top) {
            console.log('---------- Start ----------')
        }
        Object.keys(this).forEach(function(key, index, array) {
            console.log(`'${key}': ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('---------------------')
            }
        }.bind(this)) 
        if (bottom) {
            console.log('---------- End ----------')
        }
    }
}

// logger.withParams.call(person, true, true, true) // передаваемые параметры отвечают за параметры в объекте
logger.withParams.apply(person, [true, true, true]) // второй параметр всегда массив с параметрами для передачи

// const bound = logger.keys.bind(person) // метод bind привязывает контекст и возвращает функцию
// bound() // при вызове этой функции мы получаем результат по контексту

// logger.keys.call(person) // так же привязываем контекст, получаем функцию и сразу её вызываем


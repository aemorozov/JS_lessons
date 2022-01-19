// 1. Number
// const num = 42 // integer целое
// const float = 42.42 // float с десятичными
// const pow = 167e3 // pow

// console.log('Переменная pow', pow)
// console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) // максимальное значение для JS
// console.log('Math.pow 53', Math.pow(2, 53) - 1) // 2 в 53 степени - макисмальное значение для JS
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE) // максимальное число для JS
// console.log('MIN_VALUE', Number.MIN_VALUE) // минимальное число для JS
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY) // бесконечность с плюсом
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY) // бесконечность с минусом
// console.log('2 / 0', 2 / 0) // бесконечность
// console.log('typeof NaN -', typeof NaN) // NaN это число
// console.log('2 / ubdefind', 2 / undefined) // как получить NaN
// const weird = 2 / undefined
// console.log('isNaN(weird)', isNaN(weird)) // проверяем на NaN
// console.log('Конечно ли число NaN', Number.isFinite(NaN)) // проверяем конечно ли число

// const stringInt = '40'
// const stringFloat = '40.42' // число с десятичными
// console.log(Number.parseInt(stringInt) + 2) // превращаем строку в число
// console.log(parseInt(stringInt) + 2) // превращаем строку в число
// console.log(Number(stringInt) + 2) // превращаем строку в число
// console.log(+stringInt + 2) // превращаем строку в число

// console.log(parseFloat(stringFloat) + 2) // приводим строку с десятичными в число
// console.log(+stringFloat + 2) // приводим строку с десятичными в число

// console.log(0.4 + 0.2) // 0.6 - нет
// console.log(+(0.4 + 0.2).toFixed(1)) // указать количество знаков после запятой и привести к числу
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) // указать количество знаков после запятой и привести к числу
// -------------------------------------


// 2. BigInt (n)
// console.log(9007199254740991999999900n - 9007199254740991999900n); // переводим число в BigInt
// console.log(-9007199254740991999999900n); // отрицательный BigInt
// console.log(9007199254740991999999900.2323n); // ошибка, только целые числа

// console.log(10n - 4); // ошибка
// console.log(parseInt(10n) - 4); // когда нам нужен результат в виде числа
// console.log(10n - BigInt(4)); // когда нужно сохранить тип BigInt
// console.log(5n / 2n); // отсекается дробная часть, на выходе получим 2
// ------------------------------------


// 3. Math
console.log(Math.E);
console.log(Math.PI);

console.log(Math.sqrt(25)); // квадратный корень
console.log(Math.pow(5, 3)); // возвести в степень
console.log(Math.abs(-42)); // взять модуль числа

console.log(Math.max(42, 14, 63, 87)); // максимальное число
console.log(Math.min(42, 18, 09, 12)); // минимальное число

console.log(Math.floor(4,6)); // округляет всегда в низшую сторону
console.log(Math.ceil(4.2)); // округляет всегда в большую сторону
console.log(Math.round(4.9)); // округляет к ближайшему целому
console.log(Math.trunc(4.9)); // отбрасывает дробную часть

console.log(Math.sin(32)); // тригонометрические функции

console.log(Math.random()); // рандомные значения
function getRundomBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRundomBetween(10, 42))
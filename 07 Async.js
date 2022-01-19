// Event Loop - передача call back

// const timeout = setTimeout(() => {
//     console.log('After timeout')
// }, 2500)
// clearTimeout(timeout)

// const interval = setInterval(() => {
//     console.log('After interval')
// }, 1000)
// clearTimeout(interval)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }

// delay(() => {
//     console.log('After 2 seconds')
// }, 2000)



// Promises
const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => { // promise executer - исполнитель с 2 параметрами
        setTimeout(() => {
            // resolve()
            reject('Что-то пошло не так, повторите попытку.')
        }, wait)
    })
    return promise // для использования мы возвращаем promise
}

// delay(2000)  // возвращает нам константу promise в которую мы передаём execut'ы
//     .then(() => { // каждый метод передаёт отпределённый параметр в возвращаемый промис
//         console.log('After 2 seconds')
//     }) 
//     .catch(err => console.error('Error:', err))
//     .finally(() => console.log('Finally'))

const getData = () => new Promise(resolve => resolve([ // короткая запись промиса положив код (массив) в резолв 
    1, 1, 2, 3, 5, 8, 13
]))

// getData().then(data => console.log(data))



// Синтаксис async await
async function asyncExample(){ // ассинхронная функция с ожиданием await
    try { // try catch - используется для вывода ошибки 
        await delay(3000) // c помощью await оператора мы можем указать ожидание для выполнения дальнейшего кода
        const data = await getData()
        console.log('Data', data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Finally')
    }
}

asyncExample()
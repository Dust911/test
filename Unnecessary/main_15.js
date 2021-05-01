/*function sayHi (name) {
    console.log("Привет!")
    console.log("Как дела?", name)
}

const sayHello = () => {
    console.log("Hello!")
}

sayHello()
sayHi("Sasha")*/

function checkYear(year) {
    if (year < 2020) return 'Прошедший'
    else if (year === 2020) return 'Нынешний'
    else return 'Будущий'
}

let year = 3000
const result = checkYear(year)

console.log('Год', year, ':', result)
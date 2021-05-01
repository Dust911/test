const hello_input = document.querySelector('#hello_input')
const hello_btn = document.querySelector('#hello_btn')

hello_btn.addEventListener('click', () => {
    const name = hello_input.value
    alert(`Привет, ${name}!`)
})

const counter_input = document.querySelector('#counter_input')
const plus_btn = document.querySelector('#plus_btn')
const minus_btn = document.querySelector('#minus_btn')

plus_btn.addEventListener('click', () => {
    counter_input.value = Number(counter_input.value) + 1
    console.log('plus')
})

minus_btn.addEventListener('click', () => {
    counter_input.value = Number(counter_input.value) - 1
    console.log('minus')
}) 
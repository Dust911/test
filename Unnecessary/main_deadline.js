const input1_1 = document.querySelector('#input1_1')
const input1_2 = document.querySelector('#input1_2')

const input2_1 = document.querySelector('#input2_1')
const input2_2 = document.querySelector('#input2_2')

const input3_1 = document.querySelector('#input3_1')
const input3_2 = document.querySelector('#input3_2')

const input4_1 = document.querySelector('#input4_1')
const input4_2 = document.querySelector('#input4_2')

input1_1.addEventListener('click', () => {
    input1_1.value = Number(input1_1.value) + 1
    console.log(input1_1.value)
})

input1_2.addEventListener('click', () => {
    input1_2.value = Number(input1_2.value) + 2
})

input2_1.addEventListener('click', () => {
    input2_1.value = Number(input2_1.value) + 1
})

input2_2.addEventListener('click', () => {
    input2_2.value = Number(input2_2.value) + 2
})

input3_1.addEventListener('click', () => {
    input3_1.value = Number(input3_1.value) + 1
})

input3_2.addEventListener('click', () => {
    input3_2.value = Number(input3_2.value) + 2
})

input4_1.addEventListener('click', () => {
    input4_1.value = Number(input4_1.value) + 1
})

input4_2.addEventListener('click', () => {
    input4_2.value = Number(input4_2.value) + 2
})


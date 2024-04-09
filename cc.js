// function log(arg){
//     console.log(arg)
// }


// console.log(1)

// setTimeout(() => {
//     log(2)
// }, 0)

// setTimeout(() => {
//     log(3)
// }, 1000)

// console.log(4)

// setTimeout(() => {
//     log('a')
// }, 0)

// const interval = setInterval(() => {
//     log('a')
// }, 1000)


// setTimeout(() => {
//     console.log('stop')
//     clearInterval(interval)
// }, 5000)


// Exemplu de input: `{ nota1: 8, nota2: 7, nota3: 9 }`
// Exemplu de output: `8`

// const obj1 = { nota1: 8, nota2: 5, nota3: 10 }

// const func = (obj) => {
//     const marksList = Object.values(obj);

//     return marksList.reduce((acc, curr) => acc + curr)/marksList.length    
// }

// console.log(func(obj1))

// Exemplu de input: `{ nume: 'John', varsta: 30, oras: 'New York' }`
// Exemplu de output:
// ```
// nume: John
// varsta: 30
// oras: New York

//const obj1 = { nume: 'John', varsta: 30, oras: 'New York' }

// const func = (obj) => {
//     for(let key in obj) {
//         console.log(key + ': ' + obj[key])
//     }
// }

// func(obj1)

// Exemplu de input: `{ nume: 'John', varsta: 30, oras: 'New York' }, name`
// Exemplu de output: false

// const func = (obj, key) => {
//     const keysList = Object.keys(obj);

//     return keysList.includes(key)
// }

// console.log(func(obj1, 'nume'))

// Exemplu de input: `{ nume: 'John', varsta: 30, oras: 'New York' }`
// Exemplu de output: 'John30NewYork'

// const func = (obj) => {
//     let result = ''

//     for(let key in obj) result += obj[key]

//     return result;
// }

// console.log(func(obj1))

//`{ John: [8, 7, 9], Mary: [9, 9, 10], Alex: [6, 8, 7] }`
//Exemplu de output: `{ John: 'Medie: 8', Mary: 'Medie: 9', Alex: 'Medie: 7' }`

const obj1 = { John: [8, 7, 9], Mary: [9, 9, 10], Alex: [6, 8, 7] }

// const formatMarkAverage = (marksList) => {
//     return `Media: ${Math.floor(marksList.reduce((acc, curr) => acc + curr)/marksList.length)}`
// }

// const func = (obj) => {
//     const result = {};

//     for(let key in obj) {
//         result[key] = formatMarkAverage(obj[key])
//     }

//     return result;
// }

// console.log(func(obj1))
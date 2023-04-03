

let Fruit = ['Apple', 'Banana', 'Orange', 'Mango', 'Pear', 'Strawberry', 'Kiwi', 'Grape'];

// let remove = Fruit.shift() ;
// let remove2 = Fruit.pop() ;
// //Add value
// Fruit.push('Banana')
// Fruit.shift() ;
// Fruit.unshift('Pear') ;
// Fruit.unshift('Apple')
// console.log(Fruit)

// const Fruits =[]
// for(let index = 0; index <= Fruit.length-1 ; index++){

// if(Fruit[index]==='Banana') {

//     Fruits.push('Pear');
// }

// else if(Fruit[index]==='Pear') {

//     Fruits.push('Banana');
// }
// else {
// console.log(Fruit[index])
//     Fruits.push(Fruit[index])

// }
// }

const bananaIndex = Fruit.indexOf('Banana');

if (bananaIndex !== -1){

    Fruit[bananaIndex] = 'Pear' 
}

const pearIndex = Fruit.indexOf('Pear');

if (pearIndex !== -1){

    Fruit[bananaIndex] = 'Banana' 
}

console.log(Fruit)
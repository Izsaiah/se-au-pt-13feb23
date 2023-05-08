// question  4

// let a = 2, b = 3; 
// let result = `${a} + ${b} is `; 
 
// if (a + b < 10) { 
//   result += 'less than 10'; 
// } else { 
//   result += 'greater than 10'; 
// } 

// console.log(result);





//question 5

// function getGreeting(name) { 
//     return 'Hello ' + name + '!'; 
// }

// console.log(getGreeting('John'));

//written in arrow function
// getGreeting = (name) => 'Hello ' + name + '!'; 

// console.log(getGreeting('Jason'))

//written in function expression syntax

// let getGreeting = function(name) { 
//     return 'Hello ' + name + '!'; 
// } ;

// console.log(getGreeting('John'))



//question 6

// const westley = { 
//     name: 'Westley', 
//     numFingers: 5 
// } 
// const rugen = { 
//     name: 'Count Rugen', 
//     numFingers: 6 
// } 
 
// const inigo = { 
//     firstName: 'Inigo', 
//     greeting(person) {  

        
//         let greeting = `Hello ${person.name}, my name is ${inigo.firstName}. `; 
//         console.log(greeting + inigo.getCatchPhrase(person)); 
//     }, 


//     getCatchPhrase: (person) => person.numFingers === 6 ? 'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.' : 'Nice to meet you.'


//     } 
 
// inigo.greeting(westley) 
// inigo.greeting(rugen)

//question 7

// const basketballGame = {
//     score: 0,
//     fouls: 0,


//     freeThrow() {
//       this.score++;
//       return this;
//     },
//     basket() {
//       this.score += 2;
//       return this;
//     },
//     threePointer() {
//       this.score += 3;
//       return this;
//     },


// //Fouls count is +1 from ++
//     Fouls(){
     
//             this.fouls++;
//             return this;


// //Foul count is seperated from Score

//     },
//     halfTime() {
//       console.log('Halftime score is ' + this.score + 'Total fouls' + this.fouls);
//       return this;
//     },
//     fullTime() {
//       console.log('Full time score is ' + this.score + 'Total fouls' + this.fouls);
//       return this;
//     }
//   };
  
//   basketballGame.basket().freeThrow().freeThrow().basket().threePointer().Fouls().halfTime().fullTime();


//question 8

// const sydney = { 
//     name: 'Sydney', 
//     population: 5_121_000, 
//     state: 'NSW', 
//     founded: '26 January 1788', 
//     timezone: 'Australia/Sydney' 
// };

// const brisbane = {

// name: 'Brisbane' ,
// population: 10000, 
// state: 'QLD',
// founded: 'Who knows lol',
// timezone: 'Australia',
// };


// //property loops the object and allows [property] to be called in the loop

// function print(object) {

//     for(let property in object) {
//         console.log(property + ' : ' + object[property]);
//     }
// }

// //same code to print brisbane properties
// print(sydney);
// print(brisbane);


//question 9

// let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
// let dog1 = 'Bingo'; 
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let dog2 = dog1;
// let cat2 = cat1

// cat2 = {name: 'FUG' , breed: 'Fugler'};
// dog2 = 'Squirtle' ;


// //makes a copy of the values, doesnt reference the original variables.

// console.log(cat1)
// console.log(teamSports)
// console.log(dog1)



// let moreSports = [... teamSports]; //combine into one array [teamSports] that is moreSports
// moreSports.push('Tennis'); //adds to the end of an array
// moreSports.unshift('Basketball'); //adds to the start of the array


//question 10


// function PersonClass(name, age) { 
//   this.name = name; 
//   this.age = age; 
//   this.human = true; 

//   this.canDrive = function() {
//     return this.age >= 16;
//   }
  
// }

// let person1 = new PersonClass('John', 15);
// let person2 = new PersonClass('Lachlan', 22);
// let person3 = new PersonClass('Isaiah', 23);

// console.log(person1.canDrive());
// // prints if the person canDrive

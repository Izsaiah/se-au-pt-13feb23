

//Intermediate JS 


//question 1


// function FirstLetters(Charecters) {
//     return Charecters
//       .split(" ")  //based on the charecter space it  will split
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //take each word from the array and capatilizes it using charAt() and toUppercase() methods. and concatenate using slice()
//       .join(" "); //method to call back  the modified array into a string
//   }
  
//   console.log(FirstLetters("los angeles"));



  // //question 2
 //return (...) if the word limit goes past - Using Slice method if it goes past a word limit

// function truncate(str, max) {
//   if (str.length <= max) {             //Will print if it is less than the maximum word limit
//     return str;
//   } else {
//     return str.slice(0, max) + '...'; //Will slice the array printing ... if past word max 0- start max - end
//   }
// }

//   console.log(truncate('This text will be truncated if it is too long', 4))   // Str -assigned to the array, and Max assigned to number

//conditional operator
// function truncate(str, max) {
//   return str.length > max ? str.slice(0, max) + '...' : str;
// }

// console.log(truncate('This text will be truncated if it is too long', 4));

// question 3



// const animals = ['Tiger', 'Giraffe'] 

// animals.push('Elephant'); //adds to ending
// animals.push('Monkey');

// animals.unshift('Lion'); //adds to beginning
// animals.unshift('Gorilla');

// animals.sort(); //alphabetically sorts



// const middle = (animals.length / 2) //places zebra in middle
// animals[middle] = 'Zebra' ;

// function findMatchingAnimals(beginsWith) {
//   return animals.filter   // filter method and begins in new array - animal
//   (animal =>  animal.startsWith(beginsWith)  //Uses Startswith to filter specific charecters
//   );
// }


// console.log(animals)
// console.log(findMatchingAnimals('G'))



//question 4

// //FOR LOOP

// function camelCase(cssProp) {
//   let words = cssProp.split('-');
//   let camelCaseProp = words[0];
  
//   for (let i = 1; i < words.length; i++) {
//     let word = words[i];
//     let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//     camelCaseProp += capitalizedWord;
//   }
  
//   return camelCaseProp;
// }

// //CONDITIONAL OPERATOR

// function camelCase(cssProp) {
//   let words = cssProp.split('-');
  
//   return words.reduce((camelCaseProp, word, index) => {
//     let capitalizedWord = (index === 0) ? word : word.charAt(0).toUpperCase() + word.slice(1);
//     return camelCaseProp + capitalizedWord;
//   }, '');
// }

// //WITHOUT CONDITIONAL OPERATOR

// function camelCase(cssProp) {
//   let words = cssProp.split('-');
//   let camelCaseProp = words[0];
  
//   for (let i = 1; i < words.length; i++) {
//     let word = words[i];
//     let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//     camelCaseProp += capitalizedWord;
//   }
  
//   return camelCaseProp;
// }


// console.log(camelCase('margin-left')) 
// console.log(camelCase('background-image')) 
// console.log(camelCase('display')) 


//QUESTION 5

//a) Because the numbers are converted to strings and concatenated from the use of template literal. which can have rounding errors


// let twentyCents = 0.20;
// let tenCents = 0.10 ;
 
// let fixedTwenty = twentyCents.toFixed(2); //rounds to 2 decimal places
// let fixedTen = tenCents.toFixed(2); 
// console.log(fixedTwenty + fixedTen)


// //b)
// function currencyAddition (float1, float2, numDecimals ) {
//   const result = float1 + float2;
//   return (result.toFixed(numDecimals)); //parsefloat function to convert string back to a float and return it

// }
// //c)
// function currencyOperation (float1, float2){
//  const result = float1 * float2
//  return parseInt(result.toFixed(2)); //tofixed returns back as a string. parseFloat / parseInt converts it back to floating (Decimal number)

// }
// //d)


// const result2 = currencyAddition(0.1, 0.2, 5); //prints numdecimals in 3rd argument parameter
// console.log(result2);



//Question 6


// const people = [ 'John','Lachlan', 'lachlan', 'Paul', 'Paul', 'paul']   //Testing if Set is case sensitive
// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'] 
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43] 
 
// function unique(duplicatesArray) {

//   return Array.from(new Set(duplicatesArray))  //Set can only contain unique values (any duplicates will be removed)
//   }  //Array.from creates a new Array and new Set makes it unique
  

// console.log(unique(people))
// console.log(unique(colours)) 
// console.log(unique(testScores))


//Question 7

// const books = [ 
//   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
//   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
//   { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
//   { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
//   { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
// ];




// function getBookTitle(bookId) {
//   const book = books.find(book => book.id === bookId); //callback function referring to the id property of the book being evaluated by find
//   if (book) {  
//     return book.title; //will return book title based on ID
//   }
//   return null;
// }


// function getOldBooks() {
// const oldBooks = books.filter(book => book.year < 1950); //book.year gets year from object and compares it with 1950
// if (oldBooks) {
// return oldBooks.map(book => book.title); //using map to extract title from book (arrow function needs to be used in filter method to specify)
// }
// return null; 
// }
// console.log(getOldBooks());



// function addGenre() {
//   const booksWithGenre = books.map(book => ({ ...book, genre: 'classic' })); //... book adds the classic genre to all properties in the original book obeject. through callback function 
//   return booksWithGenre;
// }

// console.log(addGenre());

//QUESTION 8

// const phoneBookABC = new Map();
// phoneBookABC.set('Annabelle', '0412312343');
// phoneBookABC.set('Barry', '0433221117');
// phoneBookABC.set('Caroline', '0455221182');

// const phoneBookDEF = new Map();
// for (const [name, number] of phoneBookABC) {
//   if (name.charAt(0) === 'D' || name.charAt(0) === 'E' || name.charAt(0) === 'F') {
//     phoneBookDEF.set(name, number);
//   }
// }




// // //b)
// const entries = [
//   ['David', '0412345678'],
//   ['Emily', '0423456789'],
//   ['Frank', '0434567890']
// ];

// entries.forEach(([name, number]) => {
//   phoneBookDEF.set(name, number);
// });
// //c
// phoneBookABC.set('Caroline', '0499887766');

//d)
// function printPhoneBook(contacts) {
//   contacts.forEach((number, name) => {
//     console.log(`${name}: ${number}`);
//   });
// }

// printPhoneBook(phoneBookDEF);
// //e) 

// const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// //f) 
// phoneBook.forEach((number, name) => {
//   console.log(name);
// });



//question 9

// function sumSalaries(salaries) {
//   let total = 0;   //storage for the salaries 

//   for (let key in salaries) { //iterates over each property name
//     total += salaries[key]; // is added back to the total using the += operation
//   }

//   return total;
// }

// const salaries = {
//   "Timothy": 35000,
//   "David": 25000,
//   "Mary": 55000,
//   "Christina": 75000,
//   "James": 43000
// };


// function topEarner(salaries) {
//   let highestSalary = 0;
//   let topEarnerName = ''; //update for the top worker in the for in

//   for (const worker in salaries) {
//     if (salaries [worker] > highestSalary) {
//       highestSalary = salaries[worker];
//       topEarnerName = worker;
//     }
//   }

//   return topEarnerName;
// }

// console.log(topEarner(salaries))
// console.log(sumSalaries(salaries));


//QUESTION 10

// const today = new Date(); 
// const hours = today.getHours();
// const minutes = today.getMinutes();
// const seconds = today.getSeconds();


// const totalMinutes = hours * 60 + minutes;
// const totalSeconds = hours * 3600 + minutes * 60 + seconds;  


// console.log ('Seconds that have passed today :', totalSeconds );
// console.log('Total minutes passed so far today:', totalMinutes);
// console.log('Current time is ' + today.toLocaleTimeString()) 
// console.log(today.getHours() + ' hours have passed so far today')



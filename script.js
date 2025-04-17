// getting original elements of arrays
// Array.prototype.newElement=4
const originalArray = [1, 2, 3, 4, 5];

// originalArray.forEach(i=> console.log(i**2))

// for (i in originalArray) {
//     if(originalArray.hasOwnProperty(i))
//         {
//             console.log(i);
//         }
   
//     }

// for(let i = 0; i < originalArray.length; i++) {
   
//         console.log(originalArray[i]);
// }


//custom for each

// 1.
// const customForEach = (array, callback) => {
//     for(let i = 0; i < array.length; i++) {
//         callback(array[i]);
//     }
//     return array;
// }

// customForEach(originalArray, (element) => {
//     console.log(element**2);
// })




// 2.
Array.prototype.customForEach = function(callback) {
    for (let i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
    return this;
}

originalArray.customForEach((element) => {
    console.log(element**2);
})

// 3.
// const customForEacht = function(callback) {
//     for (let i=0;i<this.length;i++){
//         callback(this[i],i,this)
//     }
//     return this;
// }
// Array.prototype.customForEach = customForEacht;



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Higher order functions


// function higherOrderFunction(callback) {
//     console.log("This is a higher order function that takes a callback as an argument.");
//     console.log("Executing the callback function now...");
//     return callback()
        

// }

// function myCallback() {
//     console.log("This is the callback function being executed.");
//     return "Callback executed successfully!";
// }


// higherOrderFunction(myCallback);



// first class function


// function firstClassFunction() {
//     console.log("This is a first-class function, which means it can be treated like any other value.");
//     console.log("It can be assigned to variables, passed as arguments, or returned from other functions.");
//     console.log("This demonstrates the flexibility of first-class functions.");
//     return "First-class function executed successfully!";
// }


// let myFunction = firstClassFunction;
// console.log(myFunction()); // Call the function using the variable

//constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.introduce = function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//         console.log('constructor function is used to create objects with properties and methods.');
//         console.log('This demonstrates the use of constructor functions in JavaScript.');
//     };
// }

// const person1 = new Person("Alice", 30);
// const person2 = new Person("Bob", 25);



// IIFE --> Immediately Invoked Function Expression

// (function IIFE() {
//     console.log("This is an IIFE, which is a function that is executed immediately after it is defined.");
//     console.log("IIFEs are often used to create a new scope and avoid polluting the global namespace.");
//     console.log("This demonstrates the use of IIFEs in JavaScript.");
//     return "IIFE executed successfully!";
// })();


// // MAP , FILTER, REDUCE

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((num)=>{
//     console.log("This is the map function, which creates a new array by applying a function to each element of the original array.");
//     console.log("In this case, we are doubling each number in the array.");
//     return num * 2;
// });

// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const filteredNumbers = numbers.filter((num)=>{
//     console.log("This is the filter function, which creates a new array containing only the elements that pass a certain condition.");
//     console.log("In this case, we are filtering out numbers greater than 2.");
//     return num > 2;
// });

// console.log(filteredNumbers); // [3, 4, 5]


// const sum = numbers.reduce((accumulator, num) => {
//     console.log("This is the reduce function, which reduces an array to a single value by applying a function to each element.");
//     console.log("In this case, we are summing all the numbers in the array.");
//     return accumulator + num;
// }, 0);



// ways to create objects in js

// 1. Object Literal
const objectWithLiteral = {
    name: "Alice",
    age: 30,
    introduce: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log('This is an object created using object literal syntax.');
        console.log('This demonstrates the use of object literals in JavaScript.');
    }
};
objectWithLiteral.introduce();


// 2. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log('This is an object created using a constructor function.');
        console.log('This demonstrates the use of constructor functions in JavaScript.');
    };
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.introduce();    
person2.introduce();

// 3. Object.create()

const prototypeObject = {
    introduce: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log('This is an object created using Object.create().');
        console.log('This demonstrates the use of Object.create() in JavaScript.');
    }
};

const objectWithCreate = Object.create(prototypeObject);
objectWithCreate.name = "Alice";
objectWithCreate.age = 30;  
objectWithCreate.introduce();


// 4. ES6 Class Syntax

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log('This is an object created using ES6 class syntax.');
        console.log('This demonstrates the use of ES6 classes in JavaScript.');
        console.log('difference between class and constructor function is that class is a syntactical sugar over constructor function.');
        console.log('Classes provide a cleaner and more concise way to create objects and handle inheritance.');
    }
}

const personClass1 = new PersonClass("Alice", 30);
const personClass2 = new PersonClass("Bob", 25);

personClass1.introduce();
personClass2.introduce();


// 5. Factory Function
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        introduce: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
            console.log('This is an object created using a factory function.');
            console.log('This demonstrates the use of factory functions in JavaScript.');
        }
    };
}

const personFactory1 = createPerson("Alice", 30);
const personFactory2 = createPerson("Bob", 25);

personFactory1.introduce();

personFactory2.introduce();

// 6. new Object()
const objectWithNew = new Object();
objectWithNew.name = "Alice";
objectWithNew.age = 30; 
objectWithNew.introduce = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    console.log('This is an object created using new Object().');
    console.log('This demonstrates the use of new Object() in JavaScript.');
};
objectWithNew.introduce();

// 7. JSON.parse()
const jsonString = '{"name": "Alice", "age": 30}';
const objectWithJSON = JSON.parse(jsonString);
objectWithJSON.introduce = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    console.log('This is an object created using JSON.parse().');
    console.log('This demonstrates the use of JSON.parse() in JavaScript.');
};
objectWithJSON.introduce();






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


function higherOrderFunction(callback) {
    console.log("This is a higher order function that takes a callback as an argument.");
    console.log("Executing the callback function now...");
    return callback()
        

}

function myCallback() {
    console.log("This is the callback function being executed.");
    return "Callback executed successfully!";
}


higherOrderFunction(myCallback);



// first class function


function firstClassFunction() {
    console.log("This is a first-class function, which means it can be treated like any other value.");
    console.log("It can be assigned to variables, passed as arguments, or returned from other functions.");
    console.log("This demonstrates the flexibility of first-class functions.");
    return "First-class function executed successfully!";
}


let myFunction = firstClassFunction;
console.log(myFunction()); // Call the function using the variable

//constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log('constructor function is used to create objects with properties and methods.');
        console.log('This demonstrates the use of constructor functions in JavaScript.');
    };
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);



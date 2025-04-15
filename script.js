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

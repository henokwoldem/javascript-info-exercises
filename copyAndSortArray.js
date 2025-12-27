// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
    let returnArr = [];
   for(let i = 0; i < arr.length; i++){
    returnArr[i] = arr[i];
    console.log(arr[i])
     console.log(returnArr[i])
   }

   return returnArr.sort();
}

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
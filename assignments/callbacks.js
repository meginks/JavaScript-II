// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
} 

function sayLength(num){
  console.log(`This is ${num} long`);
}

console.log(getLength(items, sayLength));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.pop());
}

function sayName(name) {
  console.log(`The last item is ${name}`);
}

console.log(last(items, sayName));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

function answer(z) {
  console.log(`The answer is ${z}`);
} 

console.log(sumNums(3,5, answer));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

console.log(multiplyNums(3, 5, answer));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
return cb(item, list);

}

function isItThere(x, y) {
  if (y.includes(x) === true) {
    console.log(`${x} is there!`);
  } else {
    console.log(`${x} is not there.`);
  }
}

console.log(contains('pencil', items, isItThere));
console.log(contains("Pencil", items, isItThere));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

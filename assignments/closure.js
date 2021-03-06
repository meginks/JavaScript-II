// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function president() {
  const president = "President!";
  console.log(`I am the ${president}`);
  debugger;

  function vicePresident() {
    const vicePresident = "Vice President!";
    console.log(`I am the ${vicePresident}`)
    debugger;

    function secretaryOfState() {
      const secretaryOfState = "Secretary of State!";
      console.log(`I am the ${secretaryOfState}`);
      debugger;
    }

    secretaryOfState();
  }

  president();
} 

console.log(president);



// ==== Challenge 2: Create a counter function ====
const counter = () => { 

// Return a function that when invoked increments and returns a counter variable.

let count = 0;

function countUp() {
  count++;
  return count;
}

return countUp();

}; 

const newCounter = counter();


console.log(newCounter); 


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

// Return the factorial of the provided integer.

// What is a factorial??
// A factorial is the product of all positive integers less than or equal to n.

// For example: 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorialize(num) {
  console.log(num); // Want to see what's happening? Console log up here and you'll see what is happening within your if/else loop. Is it cycling? What numbers? How many? Lots of useful information to debug your code below.
  if(num < 0) {
    return -1;
    }  else if (num === 0){
        return 1;
      } else {
          return num*factorialize(num-1); 
        }  
}

console.log(factorialize(5));


/*

---- Slasher Flick ----

Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.slice()
Array.prototype.splice()

----  Slasher Flick ----
*/


function slasher(arr, howMany) {
  arr = arr.slice(howMany);
  return arr;
}

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 0);
slasher([1, 2, 3], 4);
slasher(["burgers", "fries", "shake"], 1);
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);


/*

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(0, 2);
console.log(removed);
*/
/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.filter()
*/

function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}


/* my original version.
function destroyer(arr) {
    var comparables = function(arr){
    arr.filter(function(){})
    }
    var filtered = [];
    function getDestroyed(value){
        if (value != num1 && value != num2){
            return value;
        }
    }
        return filtered = arr.filter(getDestroyed);
        //console.log(filtered);
}
*/

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);

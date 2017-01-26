// Return Largest Numbers in Arrays

function largestOfFour(arr) {
  arr = arr.map(function(numsArr){
            numsArr = numsArr.sort(function(a,b){ 
                return a - b;
            });
        
        return numsArr.pop();
        
    });
            
 return arr;
}


/// Version 2 - Functional Programming - Reusable code.

var findLargeNum = function(aArray) {
        aArray = aArray.sort(function(a,b){ 
                return a - b;
            });
    return aArray.pop();
    };

    function largestOfFour(arr) {
        arr = arr.map(findLargeNum);
            console.log(arr);
    };
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


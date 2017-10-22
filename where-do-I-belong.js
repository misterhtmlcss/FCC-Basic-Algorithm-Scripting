
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var myArr = Array.from(arguments)
  var firstArr = myArr.slice(0,1);
    console.log(firstArr)
  var secondArr = myArr.slice(1);
    console.log(secondArr)  
  
  var singleArr = function() {
      return myArr.push(num)
  }

  /*var result = myArr.map(function(el, i){
      console.log(i);
  })*/
  
  // return num;
}

console.log(getIndexToIns([10, 40, 60], 50));
// console.log(getIndexToIns([20, 10, 30, 40, 50], 30)); // should return 2
/* 
// getIndexToIns([10, 20, 30, 40, 50], 30) // should return 2
getIndexToIns([40, 60], 50)  // should return 1
getIndexToIns([3, 10, 5], 3) // should return 0
*/
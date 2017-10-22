// Instructions:
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

// Solution
//Final version

function reverseString(str) {
    return str.split("").reverse().join('');
  }
  
  console.log(reverseString("jello"));
  //console.log(reverseString("howdy"));



// First version
function reverseString(str) {
    firstSplit = str.split("");
    reverseOrderSplit = firstSplit.reverse("");
    joinSplit = reverseOrderSplit.join("");
    str = joinSplit;
    console.log(str);
}

reverseString("howdy");
 


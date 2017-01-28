
/*
----  Mutations  ----
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.indexOf()
*/


function mutation(arr) {
    var myArr = arr.toString().toLowerCase().split(","); // all lower case, split and then tested.
    var firstString = myArr[0];
    var secondString = myArr[1];
    for (var i = 0; i < secondString.length; i++) {
        var value = firstString.indexOf(secondString[i]) 
        if (value === -1) {
            return false;
        }
    }
    return true;
}


mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
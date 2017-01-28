/*

---- Chunky Monkey ----
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
Array.prototype.push()
Array.prototype.slice()

*/


function chunkArrayInGroups(arr, size) {
      var count = 0;
      var mySize = size;
      var answer = []
      while (count < arr.length) {
        answer.push(arr.slice(count, mySize));
        count = count + size;
        mySize = mySize + size;
      }
      return answer;
  }

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)

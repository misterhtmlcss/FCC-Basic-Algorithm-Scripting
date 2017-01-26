

// I used ECMA2015 or ES6 (as some call this version of JS) in this solution and a different iterating technique called 'for ... of'
function findLongestWord(str) {
    let biggestWordNum = 0;
    let biggestWordStr = '';
    let strArr = str.split(" ");  // created my array.
       for (let eachWord of strArr) {  // iterating through each word in the array.
           if (eachWord.length > biggestWordNum ) { // per word, which is bigger eachWord or biggestWordNum which inites at 0.
                biggestWordNum = eachWord.length;  
                biggestWordStr = eachWord;
            }
        }
        return "Here is the size and word: " + biggestWordNum + " " + biggestWordStr;
}
findLongestWord("The quick brown fox jumped over the lazy dog");


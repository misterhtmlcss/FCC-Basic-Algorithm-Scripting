
/*
-----  Truncate a string -----
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

Here are some helpful links:

String.prototype.slice()

--- 
*/

function truncateString(str, num) {
  if (num > 3)  {
      if (str.length > num) {
          // num = num - 3;
          str = str.slice(0, num-3); 
          return str + "...";
      } else {
          return str;
        }
  } else if (num <= 3)  {
        str = str.slice(0, num); 
        return str + "...";
        } else {
                return "There is something wrong. Perhaps you didn't give me a string and number? Could you be entering your data wrong?";
            }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));
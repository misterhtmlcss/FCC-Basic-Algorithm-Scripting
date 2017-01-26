
/*
-------------------   Confirm the Ending    -------------------

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.substr()
String.prototype.substring()
*/
var myStr;
var myTarget;

var confirmEnding =  function(myStr, myTarget) {
    if (myStr.length > 0 && myTarget.length > 0) {
        
        // String management here. Everything gets standardized. No extra spaces, no non-alpha info and all lowercase. Stripped bare basically.
        myStr = myStr.replace(/\W+/g, " ").trim().toLowerCase().split(" ");
        myTarget = myTarget.replace(/\W+/g, " ").trim().toLowerCase();

        // Wanted a new var to make it easy to figure out what stage in my code I'm at visually. A good var name helps.
        var myEndArrTargetString; 
        myEndArrTargetString = myStr[myStr.length-1];  //Last word in array passed to myEndArrTargetString.
        
        // About to establish the max number of times I need to loop through myTarget and/or myEndArrTargetString to determine match.
        var loopSize;
        if (myEndArrTargetString.length > myTarget.length) {
            loopSize = myTarget.length; // Is myTarget shorter? If so I want to iterate only as many times as I have letters e.g. myTarget
            } else {
            loopSize = myEndArrTargetString.length; // myEndArrTargetString is shorter or equal to myTarget, so this is the number of times I loop.
                }
    }; 
        
};         
confirmEnding("Hello World, what  are  you doing?", "worldWTF");
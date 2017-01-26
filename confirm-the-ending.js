/*
-------------------   Confirm the Ending    -------------------

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.substr()
String.prototype.substring()
*/
var str;
var target;
var confirmEnding =  function(str, target) {
    if (str.length > 0 && target.length > 0) {
        
        // String management here. Everything gets standardized. No extra spaces, no non-alpha info and all lowercase. Stripped bare basically.
        str = str.replace(/\W+/g, " ").trim().toLowerCase().split(" ");
        target = target.replace(/\W+/g, " ").trim().toLowerCase();

        // Wanted a new var to make it easy to figure out what stage in my code I'm at visually. A good var name helps.
        var myEndArrTargetString; 
        myEndArrTargetString = str[str.length-1];  //Last word in array passed to myEndArrTargetString.
        
        // About to establish the max number of times I need to loop through target and/or myEndArrTargetString to determine match.
        var loopSize;
        if (myEndArrTargetString.length > target.length) {
            loopSize = target.length; // Is target shorter? If so I want to iterate only as many times as I have letters e.g. target
            } else {
            loopSize = myEndArrTargetString.length; // myEndArrTargetString is shorter or equal to target, so this is the number of times I loop.
                } 
        var i = loopSize - 1;
        // console.log(i + " this is testing what happens with the loopsize on line 37 above my forloop comparison below"); // 'i' is correct here. 
        // console.log(myEndArrTargetString); // variable is carrying forward it's data from line 28. Why is it undefined below on :(
        for (i; i > 0; i--) {
            // console.log (i);
            // console.log(target[i]);
            // console.log(myEndArrTargetString[i] + " testing for data line 43")
            // var comparisonStr;
            if (myEndArrTargetString[i] == target[i]){
                return true;
                /*console.log(myEndArrTargetString[i] + " <= same => " + target[i] + " iteration # " + i + " and loopsize is if same this is good. I am testing for data quality and it's being passed from line 48");
                
                //substr() 
                        comparisonStr = myEndArrTargetString.unshift();
                        console.log(comparisonStr);
                        }*/
                 // Working with this string for testing - // confirmEnding("Hello Worlds", "worlds");  
            } else {
                    console.log("Not the same and definitely not similar");
                    return false;
                    };
            };
        };
};
        
        
        // console.log(str + " " + target);
        
    
        // console.log(str + " " + target);
        // var arrWordTarget = str[str.length-1];
        //console.log(str);
        // var strTarget = arrWordTarget.substr(0, arrWordTarget.length);
      
        //console.log(strTarget + " " + arrWordTarget);
        //console.log(str[str.length-1]);


// confirmEnding("Hello World, what  are  you doing?", "worldWTF");
confirmEnding("Hello Worlds", "worlds");
// confirmEnding("Hello World, what  are  you doing?", "");

// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
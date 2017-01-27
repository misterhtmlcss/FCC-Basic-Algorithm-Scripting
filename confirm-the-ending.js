/*
-------------------   Project Goal Start Notes  -------------------

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

-------------------   Project Goal End Notes    -------------------
*/

var str;
var target;
var confirmEnding =  function(str, target) {
    if (str.length > 0 && target.length > 0) {
        
        // String conditioning for process. Everything gets standardized. No extra spaces, no non-alpha info and all lowercase. Stripped bare basically.
        str = str.replace(/\W+/g, " ").trim().toLowerCase();
        target = target.replace(/\W+/g, " ").trim().toLowerCase();
        
        // filtering out final word and then determining if it's a match.
        str = str.substr(-target.length);
                if(str === target) {
                    return true;
                    // console.log(str + " " + target);
                } else {
                    return false;
                    // console.log(str + " " + target);
                    }
            return str;
        }  /*else {
            console.log("Error. You need to have a string and an submitted 'target' string to use this function.")
        }*/
};
        
confirmEnding("Hello World, what  are  you doing?", "worldWTF");
confirmEnding("Hello Worlds", "worlds");
confirmEnding("Hello World, what  are  you doing?", "");
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
confirmEnding("Open sesame", "same");
confirmEnding("Connor", "n");
// Title Case a Sentence



function titleCase(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase().split(' '); // str = ["i'm", "a", "little", "tea", "pot"];     
  var word;
  str = str.map(function(word){
    return word.replace(word[0], word[0].toUpperCase());
    })
  .join(' ');
  return str;
}

titleCase("I'm a little tea pot");

// var matches = str.match(/\b(\w)/g); 

/*
function titleCase(str) {
  str = str.split(" ");
  var newStr = str.map(function(word){
    standardizeWords = word.toLowerCase();
    console.log(" I am a lowercase word " + standardizeWords);
    var i = 0;
    var withFirstCap = standardizeWords.charAt(i).toUpperCase();
    i++
    console.log("I'm a first letter capitalization " + withFirstCap);
    return 
  })
  return str
}

titleCase("I'm a little tea pot");


lowercaseEmails.push(emails[i].toLowerCase());

*/
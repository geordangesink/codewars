/*
JavaScript

DESCRIPTION:
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.


*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
  // valid emoji chars
  let validEyes = [':', ';'];
  let validNose = ['-', '~'];
  let validMouth = [')', 'D'];
  // validation functions
  let checkEyes = eyes => validEyes.includes( eyes );
  let checkNose = nose => validNose.includes( nose );
  let checkMouth = mouth => validMouth.includes( mouth );
  // amout of valid smileys
  let amountOfSmileys = 0;
  
  // check each element in array
  arr.forEach( emoji => {
    
    switch (emoji.length){
        case 2:
          if ( checkEyes(emoji[0]) && checkMouth(emoji[1]) ){
            amountOfSmileys++;
          }
          break;
        
        case 3:
          if ( checkEyes(emoji[0]) && checkNose(emoji[1]) && checkMouth(emoji[2]) ){
            amountOfSmileys++;
          }
          break;
    }
  })
  return amountOfSmileys;
}
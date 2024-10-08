/*
JavaScript

Description:
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const messageArr = message.split("");
  let rot13Message = "";

  for (var i = 0; i < messageArr.length; i++) {
    const char = messageArr[i];
    const indexInAlphabet = alphabet.indexOf(char.toLowerCase());

    // if the character is not a letter, leave it as it is
    if (indexInAlphabet === -1) {
      rot13Message += char;
    } else {
      // apply ROT13 shifting
      let newIndex = (indexInAlphabet + 13) % 26;
      let newChar = alphabet[newIndex];

      // preserve the original case (uppercase/lowercase)
      if (char === char.toUpperCase()) {
        rot13Message += newChar.toUpperCase();
      } else {
        rot13Message += newChar;
      }
    }
  }

  return rot13Message;
}

/*
JavaScript

Description:
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  // create array for each word, alphabet array for index values, also keep track of highest score and corresponding word
  const wordsArr = x.split(" ");
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let currentHighestScore = 0;
  let currentHighest = "";
  // loop through every word and count score of each char add add to current variable
  for (var i = 0; i < wordsArr.length; i++) {
    let current = 0;
    wordsArr[i]
      .split("")
      .forEach((char) => (current += alphabet.indexOf(char.toLowerCase()) + 1));
    // update highestScore and current highest word variable if current score is higher than highest score
    if (current > currentHighestScore) {
      currentHighestScore = current;
      currentHighest = wordsArr[i];
    }
  }

  return currentHighest;
}

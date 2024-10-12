/*
JavaScript

Description:
Texas Hold'em is a Poker variant in which each player is given two "hole cards". Players then proceed to make a series of bets while five "community cards" are dealt. If there are more than one player remaining when the betting stops, a showdown takes place in which players reveal their cards. Each player makes the best poker hand possible using five of the seven available cards (community cards + the player's hole cards).

Possible hands are, in descending order of value:

Straight-flush (five consecutive ranks of the same suit). Higher rank is better.
Four-of-a-kind (four cards with the same rank). Tiebreaker is first the rank, then the rank of the remaining card.
Full house (three cards with the same rank, two with another). Tiebreaker is first the rank of the three cards, then rank of the pair.
Flush (five cards of the same suit). Higher ranks are better, compared from high to low rank.
Straight (five consecutive ranks). Higher rank is better.
Three-of-a-kind (three cards of the same rank). Tiebreaker is first the rank of the three cards, then the highest other rank, then the second highest other rank.
Two pair (two cards of the same rank, two cards of another rank). Tiebreaker is first the rank of the high pair, then the rank of the low pair and then the rank of the remaining card.
Pair (two cards of the same rank). Tiebreaker is first the rank of the two cards, then the three other ranks.
Nothing. Tiebreaker is the rank of the cards from high to low.
Given hole cards and community cards, complete the function hand to return the type of hand (as written above, you can ignore case) and a list of ranks in decreasing order of significance, to use for comparison against other hands of the same type, of the best possible hand.

hand(["A:♠", "A♦"], ["J♣", "5♥", "10♥", "2♥", "3♦"])
// ...should return {type: "pair", ranks: ["A", "J", "10", "5"]}
hand(["A♠", "K♦"], ["J♥", "5♥", "10♥", "Q♥", "3♥"])
// ...should return {type: "flush", ranks: ["Q", "J", "10", "5", "3"]}
EDIT: for Straights with an Ace, only the ace-high straight is accepted. An ace-low straight is invalid (ie. A,2,3,4,5 is invalid). This is consistent with the author's reference solution. ~docgunthrop
*/

function hand(holeCards, communityCards) {
  // all cards
  const cards = [...holeCards, ...communityCards];
  // possible hand names
  const hands = [
    "straight-flush",
    "four-of-a-kind",
    "full house",
    "flush",
    "straight",
    "three-of-a-kind",
    "two pair",
    "pair",
    "nothing",
  ];
  // index for hands
  let thisHand = 0;
  // set default rank to Straight Flush
  let ranks = isFlush(true);

  // turn strings to their Value in game
  function turnPicToNum(card) {
    let num = card;
    if (num === "J") {
      num = 11;
    } else if (num === "Q") {
      num = 12;
    } else if (num === "K") {
      num = 13;
    } else if (num === "A") {
      num = 14;
    } else {
      num = parseInt(num);
    }
    return num;
  }
  // turn value to string
  function turnNumToPic(num) {
    let card = num;
    if (card === 11) {
      card = "J";
    } else if (card === 12) {
      card = "Q";
    } else if (card === 13) {
      card = "K";
    } else if (card === 14) {
      card = "A";
    } else {
      card = `${card}`;
    }
    return card;
  }

  // helper function to find if and what pairs.. three of a kind... four of a kind... there are
  function computeSameNums(
    amountToBeSame,
    remainingNums = [],
    secondTry = false
  ) {
    // same kind, remaining cards (from previous check), is this the second check?
    const differentNums = remainingNums;
    const hand = cards.map((card) =>
      turnPicToNum(card.slice(0, card.length - 1))
    );
    hand.sort((a, b) => b - a);

    // create array of all different values in hand
    if (!secondTry) {
      hand.forEach((card) =>
        !differentNums.includes(card) ? differentNums.push(card) : null
      );
    }

    // check for each different card how often it is there
    for (var i = 0; i < differentNums.length; i++) {
      let counter = 0;
      hand.forEach((card) => (card === differentNums[i] ? counter++ : null));

      // if its there the same or more times it should be, precess
      if (counter >= amountToBeSame) {
        const pairs = differentNums[i];
        differentNums.splice(i, 1);

        let result = "what happend here?";

        if (amountToBeSame === 4) {
          // 4 of a kind, and remaining highes value
          result = [turnNumToPic(pairs), turnNumToPic(differentNums[0])];
        } else if (amountToBeSame === 3) {
          // 3 of a kind, and 2 remaining highes value
          result = [
            turnNumToPic(pairs),
            turnNumToPic(differentNums[0]),
            turnNumToPic(differentNums[1]),
          ];
        } else if (amountToBeSame === 2) {
          if (secondTry) {
            // 2 of a kind (if its a double pair or fullhouse)
            result = turnNumToPic(pairs);
          } else {
            //  of a kind, and 3 remaining highes value (if its only a pair)
            result = [
              turnNumToPic(pairs),
              turnNumToPic(differentNums[0]),
              turnNumToPic(differentNums[1]),
              turnNumToPic(differentNums[2]),
            ];
          }
        }
        return [result, differentNums];
      }
    }
    return false;
  }

  // is it a flush?
  function isFlush(straight = false) {
    // returns array of a specifiv suit, sorted by value
    function getSortedSuitCollection(suit) {
      const suitFiltered = cards
        .filter((card) => card[card.length - 1] === suit)
        .map((card) => turnPicToNum(card.slice(0, card.length - 1)));
      suitFiltered.sort((a, b) => b - a);
      return suitFiltered.map((card) => turnNumToPic(card));
    }
    // find suit array with 5 or more cards in it
    const result = [
      getSortedSuitCollection("♥"),
      getSortedSuitCollection("♦"),
      getSortedSuitCollection("♠"),
      getSortedSuitCollection("♣"),
    ].find((suit) => suit.length >= 5);

    // if there is one
    if (result) {
      // if its supposed to be straight flush run the result through straight function
      if (straight) {
        return isStraight(result);
      } else {
        return result.slice(0, 5);
      }
    } else {
      return false;
    }
  }
  // is it a straight?
  function isStraight(flushHand = false) {
    // checking for flush
    let hand = flushHand;
    if (!flushHand) {
      hand = cards.map((card) => turnPicToNum(card.slice(0, card.length - 1)));
      hand.sort((a, b) => b - a);
    } else {
      hand = hand.map((card) => turnPicToNum(card));
    }
    // array of indexes of the sorted hand -(need for same values multiple times)- consecutive values
    let consecutive = [];

    for (var i = 1; i <= hand.length; i++) {
      // if there are 5 consecutive values return them
      if (consecutive.length === 5) {
        return consecutive.map((i) => turnNumToPic(hand[i]));
      } else if (i === hand.length) {
        // if lenght is too long to index return false
        return false;
      }

      if (hand[i] === hand[i - 1] - 1) {
        if (consecutive.length === 0) {
          consecutive.push(i - 1);
        }
        consecutive.push(i);
      } else if (hand[i] !== hand[i - 1]) {
        consecutive = [];
      }
    }
  }
  // is it four of a kind?
  function isFourOfAKind() {
    return computeSameNums(4)[0];
  }
  // is it a full house?
  function isFullHouse() {
    if (computeSameNums(3)) {
      const tripple = computeSameNums(3)[0][0];
      const remaining = computeSameNums(3)[1];
      const pair = computeSameNums(2, remaining, true)[0];

      if (computeSameNums(2, remaining, true).length != 0) {
        if (pair) {
          return [tripple, pair];
        } else {
          return false;
        }
      }
    }
  }
  // is it three of a kind?
  function isThreeOfAKind() {
    return computeSameNums(3)[0];
  }
  // is it a Pair of Tow?
  function isTwoPair() {
    if (computeSameNums(2)) {
      const tripple = computeSameNums(2)[0][0];
      let remaining = computeSameNums(2)[1];
      const pair = computeSameNums(2, remaining, true)[0];
      if (computeSameNums(2, remaining, true).length != 0) {
        if (pair) {
          return [tripple, pair, turnNumToPic(remaining[0])];
        } else {
          return false;
        }
      }
    }
  }

  // is it a pair ?
  function isPair() {
    return computeSameNums(2)[0];
  }

  // go from best to worst
  if (!isFlush(true)) {
    thisHand++;
    ranks = isFourOfAKind();

    if (!isFourOfAKind()) {
      thisHand++;
      ranks = isFullHouse();

      if (!isFullHouse()) {
        thisHand++;
        ranks = isFlush();

        if (!isFlush()) {
          thisHand++;
          ranks = isStraight();

          if (!isStraight()) {
            thisHand++;
            ranks = isThreeOfAKind();

            if (!isThreeOfAKind()) {
              thisHand++;
              ranks = isTwoPair();

              if (!isTwoPair()) {
                thisHand++;
                ranks = isPair();
              }
              if (!isPair()) {
                thisHand++;
                // sort cards
                const hand = cards.map((card) =>
                  turnPicToNum(card.slice(0, card.length - 1))
                );
                hand.sort((a, b) => b - a);

                ranks = hand.map((card) => turnNumToPic(card)).slice(0, 5);
              }
            }
          }
        }
      }
    }
  }

  return { type: hands[thisHand], ranks };
}

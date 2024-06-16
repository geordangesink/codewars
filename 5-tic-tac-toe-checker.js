/*
JavaScript

If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]

 We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/

function isSolved(board) {
    // loop for player 1 and player 2
    for ( num = 1; num <= 2; num++ ){
      for ( i = 0; i < 3; i++){
        // check for horizontal lines
        if ( (board[i][0] == num && board[i][1] == num && board[i][2] == num) ||
        // check for vertical lines
           (board[0][i] == num && board[1][i] == num && board[2][i] == num) ||
        // check for diogonal (top left to bottom right)
           (board[0][0] == num && board[1][1] == num && board[2][2] == num) ||
        // check for diogonal (top right to bottom left)
           (board[0][2] == num && board[1][1] == num && board[2][0] == num)){
          return num;
        }
      }
    }
    // if game is not done yet
    if ( board[0].includes(0) || board[1].includes(0) || board[2].includes(0) ){
      return -1;
    }
    // if its a draw
    else{
      return 0;
    }
  }
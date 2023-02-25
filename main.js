//Gameboard object
const gameBoard = (() => {
  let gameBoardContent = ["X", "X", "O", "O", "X", "O"];
  const player1 = "X";
  const player2 = "O";
  const gameOver = false;
  return { gameBoardContent, player1, player2, gameOver };
})();

console.log(gameBoard);

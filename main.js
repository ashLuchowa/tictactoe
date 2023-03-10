//Default Player Object
const players = (playerName, playerScore) => {
  return { playerName, playerScore };
};

//GameStart Module
const gameStart = (() => {
  let gameBoardContent = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const player1 = players("X", 0);
  const player2 = players("O", 0);
  let currentPlayer = player1;
  let gameRound = 0;
  const gameOver = false;

  console.log(gameBoardContent[0][0]);

  return {
    gameBoardContent,
    player1,
    player2,
    currentPlayer,
    gameOver,
    gameRound,
  };
})();

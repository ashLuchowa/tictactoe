//Default Player Object
const players = (playerName, playerScore) => {
  return { playerName, playerScore };
};

//GameStart Module
const gameStart = (() => {
  let gameBoardContent = [];
  const player1 = players("X", 0);
  const player2 = players("O", 0);
  let currentPlayer = player1;
  const gameOver = false;

  const box = document.querySelector(".mainboard");
  const singleBox = document.querySelectorAll(".mainboard div");

  //Input playerSelection
  singleBox.forEach((square) => {
    square.addEventListener("click", () => {
      if (currentPlayer === player1) {
        if (!square.textContent) {
          square.textContent = player1.playerName;
          gameBoardContent.push(player1.playerName);
          console.log(gameBoardContent);
          console.log({ currentPlayer });
          currentPlayer = player2;
        }
      } else if (currentPlayer === player2) {
        if (!square.textContent) {
          square.textContent = player2.playerName;
          gameBoardContent.push(player2.playerName);
          console.log(gameBoardContent);
          console.log({ currentPlayer });
          currentPlayer = player1;
        }
      }
    });
  });

  return {
    gameBoardContent,
    box,
    singleBox,
    player1,
    player2,
    currentPlayer,
    gameOver,
  };
})();

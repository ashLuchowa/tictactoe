//GameStart Module
const gameStart = (() => {
  let gameBoardContent = [];
  const player1 = "X";
  const player2 = "O";
  let currentPlayer = player1;
  const gameOver = false;

  const box = document.querySelector(".mainboard");
  const singleBox = document.querySelectorAll(".mainboard div");

  //Input playerSelection
  singleBox.forEach((square) => {
    square.addEventListener("click", () => {
      if (currentPlayer === player1) {
        square.textContent = player1;
        gameBoardContent.push(player1);
        console.log(gameBoardContent);
        currentPlayer = player2;
      } else if (currentPlayer === player2) {
        square.textContent = player2;
        gameBoardContent.push(player2);
        console.log(gameBoardContent);
        currentPlayer = player1;
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

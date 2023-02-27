//GameStart Module
const gameStart = (() => {
  let gameBoardContent = ["X", "X", "O", "O", "X", "O"];
  const player1 = "X";
  const player2 = "O";
  let currentPlayer = player1;
  const gameOver = false;

  const box = document.querySelector(".mainboard");
  const singleBox = document.querySelectorAll(".mainboard div");

  singleBox.forEach((square) => {
    square.addEventListener("click", () => {
      if (currentPlayer === player1) {
        square.textContent = player1;
        currentPlayer = player2;
      } else if (currentPlayer === player2) {
        square.textContent = player2;
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
//Gameboard Module
const gameBoard = (() => {
  let gameBoardContent = ["X", "X", "O", "O", "X", "O"];
  const gameOver = false;
  return { gameBoardContent, gameOver };
})();

//GameStart Module
const gameStart = (() => {
  const player1 = "X";
  const player2 = "O";

  const box = document.querySelector(".mainboard");
  const singleBox = document.querySelectorAll(".mainboard div");

  singleBox.forEach((square) => {
    square.addEventListener("click", () => {
      square.textContent = player1;
      //
    });
  });

  return { box, singleBox, player1, player2 };
})();

console.log(gameStart.player1);

//Default Player Object
const players = (playerName, playerScore) => {
  return { playerName, playerScore };
};

//GameStart Module
const gameStart = (() => {
  let gameBoardContent = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ];
  const player1 = players("X", 0);
  const player2 = players("O", 0);
  let currentPlayer = player1;
  let gameRound = 0;
  const gameOver = false;

  //Each square variables
  const square1 = document.getElementById("square1");
  const square2 = document.getElementById("square2");
  const square3 = document.getElementById("square3");
  const square4 = document.getElementById("square4");

  //what happens for each square Function
  const handleSquareClick = (squareElement, row, col) => {
    if(squareElement.textContent === '') {
      gameBoardContent[row][col] = currentPlayer.playerName;
      squareElement.textContent = currentPlayer.playerName;
      currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
      console.log(gameBoardContent);
    }
  };

  //click events
  square1.addEventListener('click', () => {
    handleSquareClick(square1, 0, 0);
  })
  square2.addEventListener('click', () => {
    handleSquareClick(square2, 0, 1);
  })
  square3.addEventListener('click', () => {
    handleSquareClick(square3, 0, 2);
  })
  square4.addEventListener('click', () => {
    handleSquareClick(square4, 1, 0);
  })

  return {
    gameBoardContent,
    player1,
    player2,
    currentPlayer,
    gameOver,
    gameRound,
    handleSquareClick,
    square1,
    square2,
    square3,
    square4,
    square5,
    square6,
    square7,
    square8,
    square9,
  };
})();

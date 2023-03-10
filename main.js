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
  const square5 = document.getElementById("square5");
  const square6 = document.getElementById("square6");
  const square7 = document.getElementById("square7");
  const square8 = document.getElementById("square8");
  const square9 = document.getElementById("square9");

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
  square5.addEventListener('click', () => {
    handleSquareClick(square5, 1, 1);
  })
  square6.addEventListener('click', () => {
    handleSquareClick(square6, 1, 2);
  })
  square7.addEventListener('click', () => {
    handleSquareClick(square7, 2, 0);
  })
  square8.addEventListener('click', () => {
    handleSquareClick(square8, 2, 1);
  })
  square9.addEventListener('click', () => {
    handleSquareClick(square9, 2, 2);
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

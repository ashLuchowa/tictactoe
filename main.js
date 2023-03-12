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

  //click square event
  const setSquareClick = (squareId, row, col) => {
    const square = document.getElementById(squareId);
    square.addEventListener("click", () => {
      handleSquareClick(square, row, col);
    });
  };

  //what happens for each square Function
  const handleSquareClick = (squareElement, row, col) => {
    if(squareElement.textContent === '') {
      gameBoardContent[row][col] = currentPlayer.playerName;
      squareElement.textContent = currentPlayer.playerName;
      currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
      winCondition(squareElement.textContent);
      console.log(gameBoardContent);
    }
  };

  //click events
  const setSquareClickEvents = () => {
    setSquareClick("square1", 0, 0);
    setSquareClick("square2", 0, 1);
    setSquareClick("square3", 0, 2);
    setSquareClick("square4", 1, 0);
    setSquareClick("square5", 1, 1);
    setSquareClick("square6", 1, 2);
    setSquareClick("square7", 2, 0);
    setSquareClick("square8", 2, 1);
    setSquareClick("square9", 2, 2);
  };
  setSquareClickEvents();

  //Score UI
  let player1Score = document.querySelector('#player1-score');
  let player2Score = document.querySelector('#player2-score');
  const currentRound = document.querySelector('#current-round');
  player1Score.textContent = `Player 1: ${player1.playerScore}`;
  player2Score.textContent = `Player 2: ${player2.playerScore}`;
  currentRound.textContent = `Round ${gameRound}`;

  //Winning Logic
  const winCondition = (playerID) => {
    ((gameBoardContent[0][0] === playerID && gameBoardContent[0][1] === playerID && gameBoardContent[0][2] === playerID)
    || (gameBoardContent[1][0] === playerID && gameBoardContent[1][1] === playerID && gameBoardContent[1][2] === playerID)
    || (gameBoardContent[2][0] === playerID && gameBoardContent[2][1] === playerID && gameBoardContent[2][2] === playerID)
    || (gameBoardContent[0][0] === playerID && gameBoardContent[1][0] === playerID && gameBoardContent[2][0] === playerID)
    || (gameBoardContent[0][1] === playerID && gameBoardContent[1][1] === playerID && gameBoardContent[2][1] === playerID)
    || (gameBoardContent[0][2] === playerID && gameBoardContent[1][2] === playerID && gameBoardContent[2][2] === playerID)
    || (gameBoardContent[0][0] === playerID && gameBoardContent[1][1] === playerID && gameBoardContent[2][2] === playerID)
    || (gameBoardContent[2][0] === playerID && gameBoardContent[1][1] === playerID && gameBoardContent[0][2] === playerID)) ? playerWinResult(playerID) : console.log('No');
  }

  const playerWinResult = (playerID) => {
    if(playerID === 'X') {
      alert('Player 1 Wins!');
      player1.playerScore++;
      player1Score.textContent = `Player 1: ${player1.playerScore}`;
    } else {
      alert('Player 2 Wins!');
      player2.playerScore++;
      player2Score.textContent = `Player 2: ${player2.playerScore}`;
    }
  }

  return {
    gameBoardContent,
    player1,
    player2,
    currentPlayer,
    gameOver,
    gameRound,
    handleSquareClick,
    setSquareClick,
    setSquareClickEvents,
  };
  
})();

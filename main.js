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
  let gameRound = 1;

  //click square event
  const setSquareClick = (squareId, row, col) => {
    const square = document.getElementById(squareId);
    square.addEventListener("click", () => {
      handleSquareClick(square, row, col);
    });
  };

  //what happens for each square Function
  const handleSquareClick = (squareElement, row, col) => {
    if (squareElement.textContent === "") {
      gameBoardContent[row][col] = currentPlayer.playerName;
      squareElement.textContent = currentPlayer.playerName;

      //Change current player UI color
      if (currentPlayer === player1) {
        currentPlayer = player2;
        player1Score.classList.remove("updateScoreUI");
        player2Score.classList.add("updateScoreUI");
      } else {
        currentPlayer = player1;
        player1Score.classList.add("updateScoreUI");
        player2Score.classList.remove("updateScoreUI");
      }
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

  //UI
  let player1Score = document.querySelector("#player1-score");
  let player2Score = document.querySelector("#player2-score");
  player1Score.classList.add("updateScoreUI");

  const updateScore = () => {
    player1Score.textContent = `Player X: ${player1.playerScore}`;
    player2Score.textContent = `Player O: ${player2.playerScore}`;
  };

  const currentRound = document.querySelector("#current-round");
  currentRound.textContent = `Round ${gameRound}`;
  const updateRound = () => {
    gameRound++;
    currentRound.textContent = `Round ${gameRound}`;
  };

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

  //Win Result
  const playerWinResult = (playerID) => {
    if (playerID === "X") {
      player1.playerScore++;
    } else {
      player2.playerScore++;
    }
    updateScore();
    updateRound();
    nextRoundBtn();

    const playerWinText = document.querySelector(".next-round-btn h3");
    playerWinText.textContent = `Player ${playerID} wins!`;
  };

  //Reset Board
  const resetMainBoard = () => {
    gameBoardContent = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => (square.textContent = ""));
  };

  //Next Round btn
  const nextRoundBtn = () => {
    const blurBackground = document.querySelector(".blur-background");
    const nextRoundModal = document.querySelector(".next-round-btn");
    const nextBtn = document.querySelector(".next-round-btn button");

    setTimeout(() => {
      blurBackground.style.display = "flex";
      blurBackground.style.filter = "blur(8px)";
      nextRoundModal.style.display = "flex";
    }, 400);

    nextBtn.addEventListener("click", () => {
      resetMainBoard();
      blurBackground.style.display = "none";
      nextRoundModal.style.display = "none";
    });
  };

  return {
    gameBoardContent,
    player1,
    player2,
    currentPlayer,
    gameRound,
    handleSquareClick,
    setSquareClick,
    setSquareClickEvents,
    updateScore,
  };
})();

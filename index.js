//Variables
const textO = "O";
const textX = "X";
let currentPlayer = textX;
let random;
let spaces = [null, null, null, null, null, null, null, null, null];
let currentUsername;
let vsComputer = false;

//Pop up window for name

// window.onload = function () {
//   let username = window.prompt("Enter your name");
//   document.getElementById("playText").innerHTML = username + " vs. Computer";
//   currentUsername = username;
//   document.getElementById("playerOne").innerHTML = "playerOne" + username;
// if (username = 'null') {
//     document.getElementById("playText").innerHTML = ('You' + " vs. Computer")
// } else {
//     return;
// }
// };

//vs button - toggles vs computer to be true
//have a form for names and display names- also two player
//add remove event listener -takes types and function- cant be inside of current event
//score counter

let restartButton = document.getElementById("restartButton");
let cells = Array.from(document.getElementsByClassName("cell"));
let playText = document.getElementById("playText");

function computerPlayer() {
  random = Math.floor(Math.random() * cells.length);
  //Accessing random cells for computer player
  if (cells[random].innerText === "") {
    spaces[random] = currentPlayer;
    console.log(spaces);
    cells[random].innerText = currentPlayer;
    //for every random cell that has an empty string, put value of currentPlayer
    if (checkForWin()) {
      playText.innerText = `${currentPlayer} WINS!`;
      return;
    }
    switchPlayers();
    //recursion
  } else {
    let counter = 0; //how many open spots are currently on the board
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].innerText === "") {
        counter++;
      }
    }
    if (counter) {
      //if counter is true, (1 or greater) then we know we have empty spots on board and we re-run computerPlayer to try to find new number for empty cell
      computerPlayer();
    }
  }
}
function switchPlayers() {
  if (currentPlayer == textX) {
    currentPlayer = textO;
  } else {
    currentPlayer = textX;
  }
}
// const board = document.getElementById("board");
//       board.removeEventListener("click", );
//Click event for clicked cells
const board = document.getElementById("board");
board.addEventListener("click", function (event) {
  //passing an event so has "event parameter"
  if (!event.target.innerText) {
    //if the targeted event is falsy and has no text
    // console.log(event.target.innerText)
    event.target.innerText = currentPlayer;
    spaces[event.target.id] = currentPlayer;

    if (checkForWin()) {
      playText.innerText = `${currentPlayer} WINS!`;

      return;
    }
    if (vsComputer) {
      computerPlayer();
    } else {
      if (currentPlayer == textX) {
        //alternating between players
        currentPlayer = textO;
      } else {
        currentPlayer = textX;
      }
    }
  }
});

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Winning function
function checkForWin() {
  for (let i = 0; i < winningCombos.length; i++) {
    let arr = winningCombos[i];
    let boardIndexA = arr[0];
    let boardIndexB = arr[1];
    let boardIndexC = arr[2];
    if (spaces[boardIndexA] !== null) {
      if (
        spaces[boardIndexA] === spaces[boardIndexB] &&
        spaces[boardIndexA] === spaces[boardIndexC]
      ) {
        return true;
      }
    }
  }
  checkDraw();
  return false;
}
function checkForWin() {
  for (let i = 0; i < winningCombos.length; i++) {
    let arr = winningCombos[i];
    let boardIndexA = arr[0];
    let boardIndexB = arr[1];
    let boardIndexC = arr[2];
    if (spaces[boardIndexA] !== null) {
      if (
        spaces[boardIndexA] === spaces[boardIndexB] &&
        spaces[boardIndexA] === spaces[boardIndexC]
      ) {
        board.removeEventListener("click", handleBoardClick); // remove event listener from the board
        playText.innerText = `${currentPlayer} WINS!`;
        return true;
      }
    }
  }
  if (checkDraw()) {
    board.removeEventListener("click", handleBoardClick); // remove event listener from the board
    return true;
  }
  return false;
}

function handleBoardClick(event) {
  if (!event.target.innerText) {
    event.target.innerText = currentPlayer;
    spaces[event.target.id] = currentPlayer;
    if (checkForWin()) {
      return;
    }
    switchPlayers();
  }
}

//Draw function
function checkDraw() {
  for (let i = 0; i < spaces.length; i++) {
    const element = spaces[i];
    if (element === null) {
      return false;
    }
  }
  playText.innerText = "It's a draw!";
}

//Click event for restart button
restartButton.addEventListener("click", function () {
  for (let i = 0; i < spaces.length; i++) {
    document.getElementById(`${i}`).innerHTML = "";
    spaces[i] = null;
  }
  playText.innerText = "Let's Play!";
  currentPlayer = textX;

  //pass currentUsername
});

//Accessing random cells once game
const randomCell = Math.floor(Math.random() * cells.length);
// cells[randomCell].innerText='O'

//display hidden CSS for input element
// one player vs multi player

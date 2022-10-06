//Variables
const textO= 'O';
const textX = 'X';
let currentPlayer = textX;
// let computerPlayer = textO;
let emptyCells = '';
        let random;

let spaces = ['','','','','','','','','']

const winningCombos= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let restartButton = document.getElementById('restartButton')
let cells = document.getElementsByClassName('cell')
let playText = document.getElementById("playText")

function computerPlayer () {
    
random = Math.floor(Math.random() * cells.length); 
//Accessing random cells for computer player
if (cells[random].innerText===''){ 
    cells[random].innerText = currentPlayer;
//for every random cell that has an empty string, put value of currentPlayer
switchPlayers();
//recursion
} else{ 
    let counter= 0;//how many open spots are currently on the board
    for (let i= 0; i< cells.length; i++){
        if (cells[i].innerText==='') {
            counter++
        }
    }

    if(counter) { 
        //if counter is true, (1 or greater) then we know we have empty spots on board and we re-run computerPlayer to try to find new number for empty cell
        computerPlayer() 

    }
}
}

function switchPlayers () {
    if (currentPlayer == textX){
    currentPlayer == textO;
    } else {
        currentPlayer=textX
    }
}

//Click event for clicked cells
for (let i= 0; i < cells.length; i++) {
    console.log(cells[i])
    cells[i].addEventListener('click', function(event){ //passing an event so has "event parameter"
        if (!event.target.innerText){ //if the targeted event is falsy and has no text
            console.log(event.target.innerText)
            event.target.innerText=currentPlayer
            if (currentPlayer == textX) { //alternating between players 
                currentPlayer = textO
            } else {
                currentPlayer = textX
            }
        } computerPlayer();
    })
    
    
   
    
        // if(playerHasWon()) {
        //     playText.innerText= `${currentPlayer} WINS!`;
        //     // return;
        // }
}
//one player or two player
//function for computer move- math.random 




// function playerHasWon () {
//     if (spaces [0]=== currentPlayer) {
//         if(spaces[1]===currentPlayer && spaces[2]===currentPlayer){
//             console.log(`${currentPlayer} wins top`)
//         }
//     }
// }


//Click event for restart button
    restartButton.addEventListener('click', function () {
        
    
    Array.from(spaces).forEach(function(space,index){  //forEach only works on arrays so use array.from
        space[index] = null; //space has to be null because it's the actual space in JS
        
    })
        Array.from(cells).forEach(function (cell) {
            cell.innerText = ''; //this is cell because it's targeting the innerText of HTML
    })
    playText.innerText = 'Lets Play!'; 
    currentPlayer = textX;
    })

startGame()

// function computerPlayer (event) {
//     if (event.target.innerText= 'O') {
//         console.log(cells[i])
//         if (event.target.innerText='X') {
//             console.log(cells[i])
//         }
//     }
// }



//Accessing random cells once game
const randomCell = Math.floor(Math.random() * cells.length)
// cells[randomCell].innerText='O'

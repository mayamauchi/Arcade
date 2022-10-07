//Variables
const textO= 'O';
const textX = 'X';
let currentPlayer = textX;
// let computerPlayer = textO;
let random;
let spaces = ['','','','','','','','','']



let restartButton = document.getElementById('restartButton')
let cells = Array.from(document.getElementsByClassName('cell'))
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
            if(playerHasWon()) {
                playText.innerText= `${currentPlayer} WINS!`;
                return;
            }
            if (currentPlayer == textX) { //alternating between players 
                currentPlayer = textO
            } else {
                currentPlayer = textX
            }
            
        } computerPlayer();        
    })    
        
}


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



function playerHasWon () {
    let cell0 = document.getElementById("zero");
    let cell1 = document.getElementById("one");
    let cell2 = document.getElementById("two");
    let cell3 = document.getElementById("three");
    let cell4 = document.getElementById("four");
    let cell5 = document.getElementById("five");
    let cell6 = document.getElementById("six");
    let cell7 = document.getElementById("seven");
    let cell8 = document.getElementById("eight");
        if (
            cell0.innerText === currentPlayer &&
            cell1.innerText === currentPlayer && 
            cell2.innerText === currentPlayer
        ){
            console.log(`${currentPlayer} wins top horizontal`);
            return true;
        }

        if (
            cell3.innerText === currentPlayer &&
            cell4.innerText === currentPlayer && 
            cell5.innerText === currentPlayer
        ){
            console.log(`${currentPlayer} wins middle horizontal`)
            return true;
        }

        if (
            cell6.innerText === currentPlayer &&
            cell7.innerText === currentPlayer && 
            cell8.innerText === currentPlayer
        ){
            console.log(`${currentPlayer} wins bottom horizontal`)
            return true;
        }

        if (
            cell0.innerText === currentPlayer &&
            cell3.innerText === currentPlayer && 
            cell6.innerText === currentPlayer
        ){
            console.log(`${currentPlayer} wins left vertical`)
            return true;
        }

        if (
            cell1.innerText === currentPlayer &&
            cell4.innerText === currentPlayer && 
            cell7.innerText === currentPlayer
        ){
            console.log(`${currentPlayer} wins middle vertical`)
            return true;
        }

        if (
            cell2.innerText === currentPlayer &&
            cell5.innerText === currentPlayer && 
            cell8.innerText === currentPlayer
        ){
            console.log(`${currentPlayer} wins right vertical`)
            return true;
        }

        if (
            cell0.innerText === currentPlayer &&
            cell4.innerText === currentPlayer && 
            cell8.innerText === currentPlayer
        ){
            console.log(`${currentPlayer} wins left diagonal`)
            return true;
        }   

        if (
            cell2.innerText === currentPlayer &&
            cell4.innerText === currentPlayer && 
            cell6.innerText === currentPlayer
        ){
            console.log(`${currentPlayer} wins right diagonal`)
            return true;

        } else {
            return false;
        }
        
}

// const tieGame = function() {
//     let draw = 0;
//     Array.from(spaces).forEach(function(space, index){
//         if (spaces[i] !== null)
//         draw++;
//         if (draw === 9) {
//             playerText.innerText = 'Draw';
//         }
//     })
// }

// function tieGame () {
//     let draw = 0;
//     Array.from(spaces).forEach(function(spaces,i){
//         if (spaces[i] !== null)
//             draw++;
//         if (draw === 9) {
//             playText.innerText = 'Draw';
//         } else            
//         )             
// }
    

//Click event for restart button
    restartButton.addEventListener('click', function () {
        
    
    Array.from(spaces).forEach(function(space,index){  //forEach only works on arrays so use array.from
        space[index] = null; //space has to be null because it's the actual space in JS
        
    })
        Array.from(cells).forEach(function (cell) {
            cell.innerText = ''; //this is cell because it's targeting the innerText of HTML
    })
    playText.innerText = "Let's Play!"; 
    currentPlayer = textX;
    })



//Accessing random cells once game
const randomCell = Math.floor(Math.random() * cells.length)
// cells[randomCell].innerText='O'

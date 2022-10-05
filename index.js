//Variables
let score = 0;
const textO= 'O';
const textX = 'X';
let currentPlayer = textX;
let emptyCells = null;

let restartButton = document.getElementById('restartButton')
let cells = document.getElementsByClassName('cell')

//Click event for all cells
for (let i= 0; i < cells.length; i++) {
    console.log(cells[i])
    cells[i].addEventListener('click', function(){
        console.log("click")
    })
}
//Accessing random cells once game starts
const randomCell = Math.floor(Math.random() * cells.length);
cells[randomCell].textO.toggle() 

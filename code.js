// Etch-a-Sketch project
let containerGrid = document.querySelector('.container');
let gridSize = 64;
function makeGrid() {
    for (let j = 0; j < gridSize; j++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        for (let i = 0; i < gridSize; i++) {
            const squareSize = 600 / gridSize;
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.addEventListener('mouseover', function() {
                square.style.backgroundColor = 'red';
            });
            grid.appendChild(square);
        }
        containerGrid.appendChild(grid);
    }  
}
function userInput() {
    let input = prompt('Enter a number between 1 and 100');
    if (input > 100 || input < 1) {
        alert('Please enter a number between 1 and 100');
        return;
    }
    gridSize = input;
    containerGrid.innerHTML = '';
    makeGrid();
}
makeGrid();
const button = document.querySelector('#enterBtn');
button.onclick = userInput;


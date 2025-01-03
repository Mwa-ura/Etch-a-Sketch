// Etch-a-Sketch project
let containerGrid = document.querySelector('.container');
let gridSize = 5;
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
makeGrid();



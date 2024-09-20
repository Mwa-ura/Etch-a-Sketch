// Etch-a-Sketch project
const makeGrid = (columns) => {
    let container = document.querySelector('#container');
    for (let i = 0; i < (columns); i++) {
        let column = document.createElement('div');
        column.textContent = `${i +1}`;
        column.style.border = 'black solid 1px';
        column.setAttribute('class', 'gridClass');
        column.onmouseover = hover;
        container.appendChild(column);
    }
}
const hover = (ev) => {
    ev.target.style.backgroundColor = 'red';
}
const askUser = () => {
    return Number(prompt('Enter number of Grids.', 16))
}
window.onload = () => {
    let button = document.querySelector('#userButton');
    let container = document.querySelector('#container');
    makeGrid(16);
    button.addEventListener('click', () => {
        makeGrid(askUser());
    });
    //askUser();
}

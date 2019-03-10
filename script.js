// Add events to buttons

const btndimensions = document.getElementById('dimensions');
const randomColors = document.getElementById('randomColors');
const blackColor = document.getElementById('blackColor');
const erase = document.getElementById('erase');
const clear = document.getElementById('clear');
const divGrid = document.getElementById('grid');

// Variables

let dimensions = 16;
let color = 'black';
let random = false;
createGrid(dimensions)
let dimensions2 = 0;

// Add Listener in buttons

btndimensions.addEventListener('click', changeDimensions);
randomColors.addEventListener('click', randomColorsClick);
blackColor.addEventListener('click', blackColorClick)
erase.addEventListener('click', eraseClick);
clear.addEventListener('click', clearClick);

// Functions

function changeDimensions() {

    clearGrid()
    divGrid.setAttribute('class', 'cursorGrid');
    dimensions2 = prompt('Enter the desired dimensions (A number up to 32): ');
    
    if(dimensions2 === '' || dimensions2 === null) {

        clearGrid()
        createGrid(dimensions2 = dimensions);
        return;

    } else if (dimensions2 == dimensions) {

        clearGrid()
        createGrid(dimensions);
        return;
    }

    createGrid(dimensions2);

}

function createGrid(value) {

    for (i=0; i< value*value; i++) {

        let div = document.createElement('div');
        div.setAttribute('class', 'divs');
        div.addEventListener('mouseover', chosenColor);
        div.style.width = 500/value + 'px';
        div.style.height = 500/value + 'px';
        divGrid.appendChild(div);

    }

    color = 'black';

}

function clearGrid() {

    while(divGrid.firstChild) {
        divGrid.removeChild(divGrid.firstChild);
    }

}

function blackColorClick() {

    divGrid.setAttribute('class', 'cursorGrid');
    random = false;
    color = 'black';

}

function randomColorsClick() {

    divGrid.setAttribute('class', 'cursorGrid');
    random = true;

}

function eraseClick() {
    
    divGrid.setAttribute('class', 'cursorGrid2');
    color = 'white';
    random = false;
    chosenColor();
    
 
}


function chosenColor() {

    if(random) {
        color = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
    } else if(color === undefined){
        this.style.backgroundColor = 'black';
    }

    this.style.backgroundColor = color;

}

function clearClick() {
    clearGrid()

    if (dimensions2 !== 0 || dimensions2 !== null) {
        createGrid(dimensions2);
    } else {
        createGrid(dimensions);
    }
    
}



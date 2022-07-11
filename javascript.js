const body = document.querySelector('body');
const container = document.createElement('div');
const btnReset = document.querySelector('button');
body.append(container);
body.style = 'height: 90vh; width: 98vw;';
container.style = 'height: 100%; width: 100%;';

function makeGrid(size) {
    let newGrid = document.createElement('div');
    newGrid.style = 'height: 100%; width: 100%; display: flex;';
    newGrid.className = 'newGridClass';
    for (let j = 0; j < size; j++) {
        let row = document.createElement('div');
        row.style = `border: solid black 1px; height: 100%; display: flex; flex: ${size}; flex-direction: column;`;
        newGrid.append(row);
        for (let i = 0; i < size; i++) {
            let column = document.createElement('div');
            column.style = `border: 1px solid black; flex: ${size}; background-color: rgb(255,255,255)`;
            column.addEventListener('mouseover', ()=> {
                const redVal = Math.random() * 256;
                const greenVal = Math.random() * 256;
                const blueVal = Math.random() * 256;
                if (column.style.backgroundColor == 'rgb(255, 255, 255)') {
                    column.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
                } else if (column.style.backgroundColor == 'rgb(0, 0, 0)') {
                    column.style.backgroundColor = 'rgb(255, 255, 255)';
                } else {
                    newRedVal = (redVal * .1) + redVal;
                    newBlueVal = (blueVal * .1) + blueVal;
                    newGreenVal = (greenVal * .1) + greenVal;
                    column.style.backgroundColor = `rgb(${newRedVal}, ${newBlueVal}, ${newGreenVal})`;
                }
            });
            row.append(column);
        }
    }
    container.append(newGrid);
}

makeGrid(16);

btnReset.addEventListener('click', ()=> {
    let userSize = prompt('Yargh! How many squares matey?');
    container.removeChild(document.querySelector('.newGridClass'));
    if (userSize > 100) {
        let warning = "sorry! can't go over 100. you should know better...";
        container.append(warning);
    } else {
        makeGrid(userSize);
    }
});
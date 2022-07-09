const body = document.querySelector('body');
const container = document.createElement('div');
body.append(container);
body.style = 'height: 97vh; width: 97vw;';
container.style = 'height: 100%; width: 100%; display: flex;';

for (let j = 0; j < 16; j++) {
    let row = document.createElement('div');
    row.style = 'border: solid black 1px; height: 100%; display: flex; flex: 16; flex-direction: column;';
    container.append(row);
    for (let i = 0; i < 16; i++) {
        let column = document.createElement('div');
        column.style = 'border: 1px solid black; flex: 16;';
        row.append(column);
    }
}
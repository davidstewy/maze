const container = document.querySelector("main");
const playerDiv = document.createElement("div");

const prototypeMap = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

const legend = {
    wall: "W",
    empty: " ",
    start: "S",
    finish: "F",

    "W": "wall",
    " ": "empty",
    "S": "start",
    "F": "finish",
};

const map = [];


function movePlayer(rowOffset, columnOffset) {
    const targetRowIndex = Number(playerDiv.parentElement.dataset.rowIndex) + rowOffset
    const targetColumnIndex = Number(playerDiv.parentElement.dataset.columnIndex) + columnOffset

    // if (map.length > targetRowIndex && targetRowIndex >= 0) {
    //     if (map[0].length > targetColumnIndex && targetColumnIndex >= 0) {
    const rowExists = map[targetRowIndex] !== undefined
    const columnExists = map[targetRowIndex][targetColumnIndex] !== undefined

    if (rowExists && columnExists) {
        const targetCell = map[targetRowIndex][targetColumnIndex];
        if (targetCell.dataset.cellType !== "wall") {
            targetCell.appendChild(playerDiv);
        }
        if (targetCell.dataset.cellType === "finish"){
            setTimeout(function(){alert("You have conquered the greatest puzzle in all the land and have earned the right to be called El Jefe."); }, 100);
        }
    }
}

// const arrowActions = {
//     ArrowDown: () => movePlayer(+1, 0),
//     ArrowUp: () => movePlayer(-1, 0),
//     ArrowRight: () => movePlayer(0, +1),
//     ArrowLeft: () => movePlayer(0, -1),
// }

document.addEventListener('keydown', (event) => {
    console.log("key pressed: " + event.key);

    // arrowActions[event.key]();
    switch (event.key) {
        case "ArrowDown":
            movePlayer(+1, 0);
            break;
        case "ArrowUp":
            movePlayer(-1, 0);
            break;
        case "ArrowRight":
            movePlayer(0, +1);
            break;
        case "ArrowLeft":
            movePlayer(0, -1);
            break;
    }
})

function createMap() {
    playerDiv.id = "player"
    playerDiv.className = "cell"

    for (let rowIndex = 0; rowIndex < prototypeMap.length; rowIndex++) {
        rowDiv = document.createElement("div");
        rowDiv.className = "row";
        container.appendChild(rowDiv);
        map[rowIndex] = [];
        // Give it a classname row
        // Style row class
        for (let columnIndex = 0; columnIndex < prototypeMap[rowIndex].length; columnIndex++) {
            const cellType = prototypeMap[rowIndex][columnIndex];
            const cellDiv = document.createElement("div");
            rowDiv.appendChild(cellDiv);
            map[rowIndex][columnIndex] = cellDiv;
            cellDiv.dataset.rowIndex = rowIndex;
            cellDiv.dataset.columnIndex = columnIndex;
            cellDiv.dataset.cellType = legend[cellType];
            cellDiv.classList.add(legend[cellType]);
            cellDiv.classList.add("cell");

            if (cellType === legend.start) {
                cellDiv.appendChild(playerDiv)
            }
        }
    }
}

createMap();
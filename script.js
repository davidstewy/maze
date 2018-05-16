const map = [
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
const newMap = [];

for (let string = 0; string < map.length; string++ ) {
    let row = map[string];
    row = row.split("")
    newMap.push(row)
}
console.log(newMap)
for (let row = 0; row < newMap.length; row++){
    rowDiv = document.createElement("div");
    rowDiv.className = "rows";
    document.body.appendChild(rowDiv);
    // Give it a classname row
    // Style row class
    for (let index = 0; index < newMap[row].length; index++){
        let cell = newMap[row][index];
        console.log("cell", cell)
        let cellDiv = document.createElement("div");

        if (cell === "W") {
            cellDiv.className = "wall";
            rowDiv.appendChild(cellDiv);
        }else if (cell === " "){
            cellDiv.className = "empty";
            rowDiv.appendChild(cellDiv);
        }else if (cell === "S"){
            cellDiv.className = "start";
            rowDiv.appendChild(cellDiv);
        }else if (cell === "F"){
            cellDiv.className = "finish";
            rowDiv.appendChild(cellDiv);
        } 

    }
}

// const cellMap = 
// document.addEventListener('keydown', (event) => {
//     const keyName = event.key;
//     console.log('keydown event\n\n' + 'key: ' + keyName);
//       switch (keyName) {
//           case "ArrowDown":
//               boxTop = boxTop + 10;
//               break;
//           case "ArrowUp": 
//               boxTop = boxTop - 10; 
//               break;
//           case "ArrowRight":
//               boxLeft = boxLeft + 10;
//               break;
//           case "ArrowLeft":
//               boxLeft = boxLeft - 10;
//               break;
//           default:
//           break;
//       }
//       document.getElementById("box").style.top = boxTop + "px";
//       document.getElementById("box").style.left = boxLeft + "px";
//   });
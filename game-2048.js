const boxMatrix = [];

for (let y=0; y<5; y++) {
    boxMatrix[y] = [];
    for (let x=0; x<5; x++) {
        boxMatrix[y][x] = null;
        gameBoard.innerHTML += `<div id='x${x}y${y}' class='box x${x} y${y}'></div>`;
    }
}

const createRandomBox = () => {
    const randPower = 2**Math.ceil(Math.random() * 2);
    const randX = Math.floor(Math.random() * 5);
    const randY = Math.floor(Math.random() * 5);

    // console.log("x", randX, "y", randY, "box", boxMatrix[randY][randX]);

    if (boxMatrix[randY][randX] === null) {        
        document.querySelector(`#x${randX}y${randY}`).innerText = randPower;
        boxMatrix[randY][randX] = randPower;
    }
}

const moveBoxes = (key) => {
    for (let y=0; y<5; y++) {
        for (let x=0; x<5; x++) {
            if ((key === "ArrowUp") && !!document.querySelector(`#x${x}y${y-1}`) && (boxMatrix[y][x] != null) && ((boxMatrix[y-1][x] == null) || (boxMatrix[y-1][x] == boxMatrix[y][x]))) {
                if (boxMatrix[y-1][x] == boxMatrix[y][x]) {
                    boxMatrix[y][x] *= 2;
                }
                // console.log("box up", boxMatrix[y][x]);
                document.querySelector(`#x${x}y${y}`).innerText = "";
                document.querySelector(`#x${x}y${y-1}`).innerText = boxMatrix[y][x];
                boxMatrix[y-1][x] = boxMatrix[y][x];
                boxMatrix[y][x] = null;
            }
            else if ((key === "ArrowDown") && !!document.querySelector(`#x${x}y${y+1}`) && (boxMatrix[y][x] != null) && ((boxMatrix[y+1][x] == null) || (boxMatrix[y+1][x] == boxMatrix[y][x]))) {
                if (boxMatrix[y+1][x] == boxMatrix[y][x]) {
                    boxMatrix[y][x] *= 2;
                }
                // console.log("box down", boxMatrix[y][x]);
                document.querySelector(`#x${x}y${y}`).innerText = "";
                document.querySelector(`#x${x}y${y+1}`).innerText = boxMatrix[y][x];
                boxMatrix[y+1][x] = boxMatrix[y][x];
                boxMatrix[y][x] = null;
            }
            else if ((key === "ArrowLeft") && !!document.querySelector(`#x${x-1}y${y}`) && (boxMatrix[y][x] != null) && ((boxMatrix[y][x-1] == null) || (boxMatrix[y][x-1] == boxMatrix[y][x]))) {
                if (boxMatrix[y][x-1] == boxMatrix[y][x]) {
                    boxMatrix[y][x] *= 2;
                }
                // console.log("box left", boxMatrix[y][x]);
                document.querySelector(`#x${x}y${y}`).innerText = "";
                document.querySelector(`#x${x-1}y${y}`).innerText = boxMatrix[y][x];
                boxMatrix[y][x-1] = boxMatrix[y][x];
                boxMatrix[y][x] = null;
            }
            else if ((key === "ArrowRight") && !!document.querySelector(`#x${x+1}y${y}`) && (boxMatrix[y][x] != null) && ((boxMatrix[y][x+1] == null) || (boxMatrix[y][x+1] == boxMatrix[y][x]))) {
                if (boxMatrix[y][x+1] == boxMatrix[y][x]) {
                    boxMatrix[y][x] *= 2;
                }
                // console.log("box right", boxMatrix[y][x]);
                document.querySelector(`#x${x}y${y}`).innerText = "";
                document.querySelector(`#x${x+1}y${y}`).innerText = boxMatrix[y][x];
                boxMatrix[y][x+1] = boxMatrix[y][x];
                boxMatrix[y][x] = null;
            }
        }
    }
    createRandomBox();

    let currentBox
    for (let y=0; y<5; y++) {
        for (let x=0; x<5; x++) {
            currentBox = document.querySelector(`#x${x}y${y}`);
            if (currentBox.innerText == 2) currentBox.style.background = "pink";
            else if (currentBox.innerText == 4) currentBox.style.background = "aqua";
            else if (currentBox.innerText == 8) currentBox.style.background = "yellow";
            else if (currentBox.innerText == 16) currentBox.style.background = "lime";
            else if (currentBox.innerText == 32) currentBox.style.background = "orange";
            else if (currentBox.innerText == 64) currentBox.style.background = "violet";
            else if (currentBox.innerText == 128) currentBox.style.background = "brown";
            else if (currentBox.innerText == 256) currentBox.style.background = "blue";
            else if (currentBox.innerText == 512) currentBox.style.background = "green";
            else if (currentBox.innerText == 1024) currentBox.style.background = "beige";
            else if (currentBox.innerText == 2048) currentBox.style.background = "red";
            else currentBox.style.background = "none";
        }
    }
}

createRandomBox();

document.addEventListener("keydown", ({key}) => {
    // console.log("Key Down:", key);

    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
        moveBoxes(key);
    }
})
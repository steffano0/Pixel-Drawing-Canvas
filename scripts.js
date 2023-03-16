


function changeSize (size = 16) {

    canvas.innerHTML = ""
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.className = "column";
        for (let j = 0; j < size; j++) {
            let row = document.createElement("div");
            row.className = "row";
            column.appendChild(row);
        }
        canvas.appendChild(column);
    }
    pixels = Array.from(document.querySelectorAll(".row"));
    activeMode(currentMode);



}






function changeColor () {
    if (onPencil) {
        color = "black";
    } else if (onEraser) {
        color = "white";
    } else if (onRainbow) {
        color = generateNewColor();
    }

    if (ismouseDown) {
        this.style.backgroundColor = color;
    }
}



function dragandClick () {
    pixels.forEach(pixel => pixel.addEventListener("mousemove", changeColor));
    pixels.forEach(pixel => pixel.addEventListener("mousedown", () => {
        ismouseDown = true
    }));
    document.addEventListener("mouseup", () => {
        ismouseDown = false
    });
}



function activeMode(mode) {
    if (mode === "pencil") {
        pencil.classList.add('active');
        eraser.classList.remove('active');
        rainbow.classList.remove('active');
        onPencil = true;
        onEraser = false;
        onRainbow = false;

    } else if (mode === "eraser") {
        pencil.classList.remove('active');
        eraser.classList.add('active');
        rainbow.classList.remove('active');
        onPencil = false;
        onEraser = true;
        onRainbow = false;
    }
    else if (mode === "rainbow") {
        pencil.classList.remove('active');
        eraser.classList.remove('active');
        rainbow.classList.add('active');
        onPencil = false;
        onEraser = false;
        onRainbow = true;
    } else {
        onPencil = false;
        onEraser = false;
        onRainbow = false;
    }
    dragandClick();

}




/* CREATE RANDOM COLOR */
const HEXCHARACTERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getCharacter(index) {
    return HEXCHARACTERS[index];
}

function generateNewColor() {
    let hexColorRep = "#";

    for (let i = 0; i < 6; i++) {
        const randomPosition = Math.floor (Math.random() * HEXCHARACTERS.length);
        hexColorRep += getCharacter(randomPosition);
    }
    
    return hexColorRep
}


let ismouseDown = false;
let color = "black";
let onPencil = false;
let onEraser = false;
let onRainbow = false;
let pixels = [];
let currentMode = null;
const canvas = document.querySelector("#canvas")
const clear = document.querySelector(".btn-clear");
const pencil = document.querySelector(".btn-pencil");
const eraser = document.querySelector(".btn-eraser");
const rainbow = document.querySelector(".btn-rainbow");
const slider = document.querySelector("#myRange");

slider.addEventListener("input", () => {
    console.log(slider.value)
    changeSize(slider.value)
    
});

eraser.addEventListener("click", () => {
    activeMode("eraser");
    currentMode = "eraser";
});
pencil.addEventListener("click", () => {
    activeMode("pencil");
    currentMode = "pencil";
});
rainbow.addEventListener("click", () => {
    activeMode("rainbow");
    currentMode = "rainbow";
});
clear.addEventListener("click", () => {
    pixels.forEach(pixel => pixel.style.backgroundColor = "white");
});


window.onload = () => {
    changeSize();
    
}


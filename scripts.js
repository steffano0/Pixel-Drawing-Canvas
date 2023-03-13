let columns = 16;
let rows = 16;
let canvas = document.querySelector("#canvas")

for (let i = 0; i < columns; i++) {
    let column = document.createElement("div");
    column.className = "column";
    for (let j = 0; j < rows; j++) {
        let row = document.createElement("div");
        row.className = "row";
        column.appendChild(row);

    }
    canvas.appendChild(column);
}



function changeColor () {
    if (ismouseDown) {
        this.style.backgroundColor = color
    }
}

function clearCanvas() {
    pixels.forEach(pixel => pixel.style.backgroundColor = "white");
    draw()

}


    

function dragandClick () {
    pixels.forEach(pixel => pixel.addEventListener("mouseover", changeColor));
    pixels.forEach(pixel => pixel.addEventListener("mousedown", () => {
        ismouseDown = true
    }));
    document.addEventListener("mouseup", () => {
        ismouseDown = false
    });
}

function draw () {
    color = "black"
    dragandClick();
    
}

function erase () {
    color = "white"; 
    dragandClick();
}

let ismouseDown = false;
let color = "black";
const pixels = Array.from(document.querySelectorAll(".row"));
const clear = document.querySelector(".btn-clear");
const pencil = document.querySelector(".btn-pencil");
const eraser = document.querySelector(".btn-eraser");
eraser.addEventListener("click", erase);
pencil.addEventListener("click", draw);
clear.addEventListener("click", clearCanvas);




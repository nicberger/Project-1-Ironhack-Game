let canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 600;

let player = new Player();

function draw() {
    player.draw();
    this.player.move();
}

draw();

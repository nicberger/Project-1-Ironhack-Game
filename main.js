//rect(x-value, y-value, width value, height value)
let x = 0;
let y = 0;

const player = new Player();

function setup() {
    createCanvas(1000, 600);
}

function draw() {
    background(200);
    player.draw();
    player.move();
}

function keyPressed() {
    if (keyCode === ARROW_LEFT) {
        playerHorizontalDirection -= 50;
    } else if (keyCode === ARROW_DOWN) {
        playerVerticalDirection += 50;
        if (playerVerticalDirection >= 450) {
            playerVerticalDirection = 0;
        }
    } else if (keyCode === ARROW_UP) {
        playerVerticalDirection -= 50;
    } else if (keyCode === ARROW_RIGHT) {
        playerHorizontalDirection += 50;
    }
}

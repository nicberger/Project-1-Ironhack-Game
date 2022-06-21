const player = new Player();
let bullets = [];
let enemies = [];

function setup() {
    createCanvas(1000, 600);
}

function draw() {
    background(200);
    player.draw();
    player.move();
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].draw();
        bullets[i].move();
    }
}

// KeyHandler functions

function keyPressed() {
    // shooting bullets with space button
    if (key === " ") {
        let bullet = new Bullets(player.x, player.y + 10);
        bullets.push(bullet);
    }
    // moving Player horizontally and vertically with arrow keys
    if (keyCode === ARROW_LEFT) {
        playerHorizontalDirection -= 50;
        if (playerHorizontalDirection < -60) {
            playerHorizontalDirection = 1000;
        }
    } else if (keyCode === ARROW_DOWN) {
        playerVerticalDirection += 50;
        if (playerVerticalDirection >= 640) {
            playerVerticalDirection = 0;
        }
    } else if (keyCode === ARROW_UP) {
        playerVerticalDirection -= 50;
        if (playerVerticalDirection <= -40) {
            playerVerticalDirection = 600;
        }
    } else if (keyCode === ARROW_RIGHT) {
        playerHorizontalDirection += 50;
        if (playerHorizontalDirection >= 1060) {
            playerHorizontalDirection = 0;
        }
    }
}

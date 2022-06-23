const player = new Player();
const enemy = new Enemies();

function setup() {
    createCanvas(1000, 600);
}

function draw() {
    background(200);
    enemy.draw();
    player.draw();
    player.move();
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].draw();
        bullets[i].move();
    }
    player.keyPressed();

    //Player is colliding with enemy
    if (isCollidingWithEnemy(player, enemy)) {
        gameOver();
    }
}

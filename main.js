const game = new Game();

function setup() {
    createCanvas(1000, 600);
}

function draw() {
    background(200);
    game.play();
    game.bulletAndEnemyColliding();
    game.bulletAndObstacleColliding();
    game.bulletsShooting();
    game.keyPressed();
}

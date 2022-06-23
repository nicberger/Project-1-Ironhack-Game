const game = new Game();

function setup() {
    createCanvas(1000, 600);
}

function draw() {
    background(200);
    game.play();
    game.playerAndEnemyColliding();
    game.bulletAndEnemyColliding();
    game.bulletsShooting();
    game.keyPressed();
}

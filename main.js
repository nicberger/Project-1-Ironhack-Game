var game = new Game();

function setup() {
    createCanvas(1000, 600);
    button = createButton("Play");
    button.position(500, 400);
    button.mousePressed(startGame);
}

function draw() {
    //Start screen
    if (gameMode == 0) {
        background(200);
        fill(227, 101, 91);
        textSize(50);
        textAlign(CENTER);
        text("Kill the Asteroids", 500, 300);
        // text("Game Beschreibung kommt hier hin...", 500, 400);
        textSize(12);
        textAlign(CENTER);
        text("Press 'BUTTON' to play.", 500, 320);
    }
    //Gameplay Mode
    if (gameMode == 1) {
        background(200);
        game.play();
        game.bulletAndEnemyColliding();
        game.bulletAndObstacleColliding();
        game.bulletsShooting();
        game.keyPressed();
    }

    //Game Over Screen
    if (gameMode == 2) {
        background(150);

        textSize(72);
        textAlign(CENTER);
        text("GAME OVER", width / 2, height / 2);
    }
    console.log(gameMode);
}

function preload() {
    game.preload();
}

function startGame() {
    gameMode = 1;
    button.hide();
}

function reStartGame() {
    gameMode = 1;
    button2.hide();
}

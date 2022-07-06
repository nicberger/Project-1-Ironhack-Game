let game = new Game();

function setup() {
    createCanvas(1000, 600);
    button = createButton("Play");
    button.position(500, 400);
    button.mousePressed(startGame);
    slider = createSlider(0, 1, 0.5, 0.01);
}

function draw() {
    //Start screen
    if (gameMode == 0) {
        image(bg, -60, 0, 1024, 768);
        image(muskStartScreenImage, 452, 400, 188, 157);
        fill(227, 101, 91);
        textSize(50);
        textAlign(CENTER);
        text("Destroy the Asteroids", 500, 120);
        textSize(25);
        textAlign(CENTER);
        if (!introSong.isPlaying()) {
            introSong.play();
        }
        introSong.setVolume(slider.value());
        text("...and safe some tech billionaires!", 500, 160);
        textSize(12);
        textAlign(CENTER);
        text("Press 'BUTTON' to play.", 500, 320);
    }
    //Gameplay Mode
    if (gameMode == 1) {
        slider.hide();
        introSong.stop();
        background(200);
        game.play();
        //Collision Scenarios
        game.playerObstacleCollision();
        game.bulletObstacleCollision();
        game.teleporterTechguyCollision();
        game.playerTechGuyCollision();
        game.bulletTechGuyCollision();
        //Bullets and Teleporter Shooting functions
        game.bulletsShooting();
        game.teleporterShooting();
        game.keyPressed();
    }

    //Game Over Screen
    if (gameMode == 2) {
        image(bgGameover, -60, 0, 1064, 841);
        textSize(72);
        textAlign(CENTER);
        text("GAME OVER", width / 2, height / 2);
    }
}

function preload() {
    font1 = loadFont("fonts/ARCADE_N.TTF");
    bg = loadImage("images/background_01_static.png");
    muskStartScreenImage = loadImage("images/ElonMuskStarterScreen.png");
    bgGameover = loadImage("images/background_01_parallax_01.png");
    introSong = loadSound("sounds/gameIntroSong.mp3");
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

let game = new Game();

let canvas;

function setup() {
    createCanvas(1000, 600);
    //Play Button Styling
    button = createButton("Press 'START GAME'!");
    button.style("font-size", "17px");
    button.style("color", "rgb(227, 101, 91)");
    button.style("background-color", "Transparent");
    button.style("border", "Transparent");
    button.position(canvas, 280);
    button.mousePressed(startGame);

    //Background Music Button Styling
    backgroundmusicPlayButton = createButton("MUSIC ON");
    backgroundmusicPlayButton.mousePressed(togglePlaying);
    backgroundmusicPlayButton.style("color", "rgb(227, 101, 91)");
    backgroundmusicPlayButton.style("background-color", "Transparent");
    backgroundmusicPlayButton.style("border", "Transparent");
    backgroundmusicPlayButton.position(canvas, 26);

    //Volume Slider Styling
    slider = createSlider(0, 1, 0.3, 0.01);
    slider.position(canvas);
    slider.class("slider01");
}

function togglePlaying() {
    if (!introSong.isPlaying()) {
        introSong.play();
        backgroundmusicPlayButton.html("MUSIC OFF");
    } else {
        introSong.stop();
        backgroundmusicPlayButton.html("MUSIC ON");
    }
}

function draw() {
    //Slider globally shown in all game modes
    introSong.setVolume(slider.value());
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
        text("...and save some tech billionaires from space!", 500, 160);
    }
    //Gameplay Mode
    if (gameMode == 1) {
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
        textSize(20);
        fill(227, 101, 91);
        text("Score: " + score, 50, 30);
    }

    //Game Over Screen
    if (gameMode == 2) {
        image(bgGameover, -60, 0, 1064, 841);
        textSize(72);
        fill(227, 101, 91);
        text("GAME OVER", width / 2, 200);
        textSize(40);
        fill(229, 101, 91);
        text("Score: " + score, canvasWidth / 2, 255);

        //Display of score ratings (Game Over Screen)
        if (score < 10) {
            textSize(20);
            fill(237, 101, 91);
            text("Seriously? You can do better!", canvasWidth / 2, 300);
        } else if (score < 20) {
            textSize(20);
            fill(237, 101, 91);
            text("Elon needs you, try again!", canvasWidth / 2, 300);
        } else if (score < 50) {
            textSize(20);

            fill(237, 101, 91);
            text("Great job, you're getting better!", canvasWidth / 2, 300);
        } else if (score < 1000) {
            textSize(20);
            fill(237, 101, 91);
            text("Wow, Elon's gonna hire you!", canvasWidth / 2, 300);
        }
    }
}

function preload() {
    //Game Theme by me inspired by David Bowies "Space Oddity"
    introSong = loadSound("sounds/gameIntroSong.mp3");
    //Images
    bg = loadImage("images/background_01_static.png");
    muskStartScreenImage = loadImage("images/ElonMuskStarterScreen.png");
    bgGameover = loadImage("images/background_01_parallax_01.png");
    game.preload();
}

function startGame() {
    gameMode = 1;
    button.hide();
}

function reStartGame() {
    gameMode = 1;
    button2.hide();
    score = 0;
}

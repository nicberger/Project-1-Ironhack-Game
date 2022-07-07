//Game Over Screen appears whenever player is colliding with an enemy object
function gameOver() {
    gameMode = 2;
    if (introSong.isPlaying()) {
        introSong.stop();
        backgroundmusicPlayButton.html("MUSIC ON");
    }
    button2 = createButton("Press here to 'RESTART GAME'");
    button2.style("color", "rgb(227, 101, 91)");
    button2.style("background-color", "Transparent");
    button2.style("font-size", "17px");
    button2.style("border", "Transparent");
    button2.position(380, 380);
    button2.mousePressed(reStartGame);
    game = new Game();
    playerVerticalDirection = canvasHeight / 2;
    playerHorizontalDirection = 0;
    preload();
}

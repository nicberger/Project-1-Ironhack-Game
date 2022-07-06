//Game Over Screen appears whenever player is colliding with an enemy object
function gameOver() {
    gameMode = 2;
    button2 = createButton("Retry");
    button2.position(canvasWidth / 2, 380);
    button2.mousePressed(reStartGame);
    game = new Game();
    playerVerticalDirection = canvasHeight / 2;
    playerHorizontalDirection = 0;
    preload();
}

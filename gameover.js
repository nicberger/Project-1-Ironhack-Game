//Game Over Screen appears whenever player is colliding with an enemy object
function gameOver() {
    gameMode = 2;
    button2 = createButton("Retry");
    button2.position(500, 350);
    button2.mousePressed(reStartGame);
    game = new Game();
    playerVerticalDirection = canvasHeight / 2;
    playerHorizontalDirection = 0;
    score = 0;
    anzeigeSPAN.innerHTML = score;
    preload();
}

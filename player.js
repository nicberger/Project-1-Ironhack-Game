class Player {
    constructor() {
        this.x = 10;
        this.y = canvasHeight / 2;
        this.width = 60;
        this.height = 40;
    }

    keyPressed() {
        // shooting bullets with space button
        if (keyIsDown(SPACEBAR)) {
            let bullet = new Bullets(player.x, player.y + 10);
            bullets.push(bullet);
        }
        // moving Player horizontally and vertically with arrow keys
        if (keyIsDown(ARROW_LEFT)) {
            playerHorizontalDirection -= 5;
            if (playerHorizontalDirection < -60) {
                playerHorizontalDirection = 1000;
            }
        } else if (keyIsDown(ARROW_DOWN)) {
            playerVerticalDirection += 5;
            if (playerVerticalDirection >= 640) {
                playerVerticalDirection = 0;
            }
        } else if (keyIsDown(ARROW_UP)) {
            playerVerticalDirection -= 5;
            if (playerVerticalDirection <= -40) {
                playerVerticalDirection = 600;
            }
        } else if (keyIsDown(ARROW_RIGHT)) {
            playerHorizontalDirection += 5;
            if (playerHorizontalDirection >= 1060) {
                playerHorizontalDirection = 0;
            }
        }
    }

    draw() {
        rect(this.x, this.y, this.width, this.height);
    }
    move() {
        this.x = playerHorizontalDirection;
        this.y = playerVerticalDirection;
    }
}

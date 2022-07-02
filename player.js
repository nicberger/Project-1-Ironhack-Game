class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 50;
    }
    preload() {
        this.imgSpaceship = loadImage("images/Spaceship1.png");
        console.log(this.imgSpaceship);
    }

    keyPressed() {
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
        image(this.imgSpaceship, this.x, this.y, this.width, this.height);
    }
    move() {
        this.x = playerHorizontalDirection;
        this.y = playerVerticalDirection;
    }
}

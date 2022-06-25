class Background {
    constructor() {
        this.x = 0;
    }

    preload() {
        this.imgBackground = loadImage("./images/background.png");
    }

    drawBackground() {
        image(this.imgBackground, this.x, 0, canvasWidth, canvasHeight, 0);
        image(this.imgBackground, this.x + canvasWidth, 0, canvasWidth, 600);

        this.x -= 4;

        if (this.x <= -canvasWidth) {
            this.x = 0;
        }
    }
}

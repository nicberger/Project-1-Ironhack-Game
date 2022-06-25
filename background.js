class Background {
    constructor() {
        this.x = 0;
    }

    preload() {
        this.imgBackground = loadImage("images/background_01_parallax_01.png");
    }

    drawBackground() {
        image(this.imgBackground, this.x, 0, canvasWidth, 600);
        image(this.imgBackground, this.x + canvasWidth, 0, canvasWidth, 600);

        // this.x -= 2;

        // if (this.x <= -canvasWidth) {
        //     this.x = 0;
        // }
    }
}

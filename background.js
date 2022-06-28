class Background {
    constructor() {
        this.x = 0;
        this.xOverlayBackground = 0;
    }

    preload() {
        this.overlayBackground = loadImage("images/pngwing.com.png");
        this.imgBackground = loadImage("images/background_01_parallax_01.png");
    }

    drawBackground() {
        image(this.imgBackground, this.x, 0, canvasWidth, 600);
        // image(this.imgBackground, this.x + canvasWidth, 0, canvasWidth, 600);
        image(
            this.overlayBackground,
            this.xOverlayBackground,
            0,
            canvasWidth,
            600
        );

        this.xOverlayBackground -= 2;

        if (this.xOverlayBackground <= -canvasWidth) {
            this.xOverlayBackground = canvasWidth + getRndInteger(100, 1000);
        }
    }
}

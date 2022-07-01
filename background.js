class Background {
    constructor() {
        this.x = 0;
        this.xOverlayBackground1 = 0;
        this.xOverlayBackground2 = 0;
        this.xOverlayBackground3 = 0;
        // this.xPlanet = 0;
    }

    preload() {
        // this.imgPlanet = loadImage("images/background_04_parallax_02.png");
        this.overlayBackground = loadImage(
            "images/background_01_parallax_02.png"
        );
        this.overlayBackground1 = loadImage(
            "images/background_01_parallax_02.png"
        );
        this.overlayBackground2 = loadImage(
            "images/background_02_parallax_02.png"
        );
        this.overlayBackground3 = loadImage(
            "images/background_03_parallax_02.png"
        );
        this.imgBackground = loadImage("images/background_01_parallax_01.png");
    }

    drawBackground() {
        image(this.imgBackground, this.x, 0, canvasWidth, 600);
        image(
            this.overlayBackground1,
            this.xOverlayBackground1 + canvasWidth,
            0,
            canvasWidth,
            600
        );
        image(
            this.overlayBackground2,
            this.xOverlayBackground2 + canvasWidth * 2,
            0,
            canvasWidth,
            600
        );
        image(
            this.overlayBackground3,
            this.xOverlayBackground3 + canvasWidth * 3,
            0,
            canvasWidth,
            600
        );
        // image(
        //     this.imgPlanet,
        //     this.xPlanet + canvasWidth * 3,
        //     100,
        //     canvasWidth,
        //     600
        // );

        //Speed Overlay Backgrounds
        this.xOverlayBackground1 -= 2;
        this.xOverlayBackground2 -= 2;
        this.xOverlayBackground3 -= 2;
        this.xPlanet = -2;

        // Whenever the overlayBackground is totally off canvas (-canvasWidth) reset the left location to 0
        if (this.xOverlayBackground1 <= -canvasWidth) {
            this.xOverlayBackground1 + canvasWidth * 3;
        }
        if (this.xOverlayBackground2 <= -canvasWidth) {
            this.xOverlayBackground2 + canvasWidth * 3;
        }
        if (this.xOverlayBackground3 <= -canvasWidth) {
            this.xOverlayBackground3 + canvasWidth * 3;
        }

        // For the planet objects
        // if (this.xPlanet <= -canvasWidth) {
        //     this.xPlanet = canvasWidth + getRndInteger(100, 1000);
        // }
    }
}

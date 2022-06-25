class Obstacle {
    constructor(img) {
        this.height = 80;
        this.width = 80;
        this.y = random(this.height, canvasHeight - this.height);
        this.x = canvasWidth;
        this.speed = random(1, 5);
        this.img = img;
    }

    drawObstacle() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.x -= this.speed;
    }
}

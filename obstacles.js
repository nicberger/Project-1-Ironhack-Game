class Obstacle {
    constructor() {
        this.height = random(10, 20);
        this.width = random(25, 100);
        this.y = random(150, canvasHeight - this.height);
        this.x = canvasWidth;
        this.speed = random(1, 5);
    }

    drawObstacle() {
        rect(this.x, this.y, this.width, this.height);

        this.x -= this.speed;
    }
}

class Obstacle {
    constructor(img) {
        this.height = 80;
        this.width = 80;
        this.yrelative = random(this.height, canvasHeight - this.height);
        this.xrelative = canvasWidth;
        this.x;
        this.y;
        this.speed = random(1, 5);
        this.img = img;
        this.rotation = 0;
    }

    drawObstacle() {
        push();

        this.rotation += 0.02;
        translate(this.xrelative, this.yrelative);
        rotate(this.rotation);

        image(
            this.img,
            -(this.width / 2),
            -(this.height / 2),
            this.width,
            this.height
        );
        this.x = this.xrelative - this.width / 2;
        this.y = this.yrelative - this.height / 2;
        this.xrelative -= this.speed;
        pop();
    }
}

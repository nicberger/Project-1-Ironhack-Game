class Player {
    constructor() {
        this.x = 10;
        this.y = canvasHeight / 2;
        this.width = 60;
        this.height = 40;
    }
    draw() {
        rect(this.x, this.y, this.width, this.height);
    }
    move() {
        this.x = playerHorizontalDirection;
        this.y = playerVerticalDirection;
    }
}

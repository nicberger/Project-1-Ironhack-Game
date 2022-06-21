class Bullets {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
    }
    draw() {
        rect(this.x, this.y, this.width, this.height);
    }
    move() {
        this.x = this.x + 20;
    }

    moveLeft() {
        this.x = this.x - 20;
    }
}

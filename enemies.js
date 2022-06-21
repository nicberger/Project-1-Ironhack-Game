class Enemies {
    constructor() {
        this.x = 1050;
        this.y = random(100, 400);
        this.width = 20;
        this.height = 20;
    }

    drawEnemies() {
        rect(this.x, this.y, this.width, this.height);
    }
    move() {
        this.x -= 20;
    }
}

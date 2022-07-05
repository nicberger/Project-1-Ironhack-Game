class Teleporter {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.img = img;
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
    }
    move() {
        this.x = this.x + 20;
    }
}

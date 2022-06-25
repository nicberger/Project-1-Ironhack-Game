class Bullets {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        // this.img = img;
    }

    preload() {
        this.imgBlaster = loadImage("images/bullet_blaster_big_single.png");
    }

    draw() {
        rect(this.x, this.y, this.width, this.height);
    }
    move() {
        this.x = this.x + 20;
    }
}

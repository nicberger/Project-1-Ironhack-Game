class Bullets {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.width = 77;
        this.height = 26;
        this.img = img;
    }

    // preload() {
    //     this.imgBlaster = loadImage("images/bullet_blaster_big_single.png");
    // }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
    }
    move() {
        this.x = this.x + 20;
    }
}

class Explosions {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.img = img;
        this.cooldown = 40;
    }

    draw() {
        this.cooldown--;
        if (this.cooldown == 0) return false;
        image(this.img, this.x, this.y, this.width, this.height);
        return true;
    }
}

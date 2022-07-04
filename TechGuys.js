class Techs {
    constructor(img) {
        this.height = 166;
        this.width = 100;
        this.yrelative = random(this.height, canvasHeight - this.height);
        this.xrelative = canvasWidth;
        this.x;
        this.y;
        this.speed = random(1, 2);
        this.img = img;
        this.rotation = 0;
    }

    drawTechs() {
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

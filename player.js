class Player {
    constructor() {
        this.x = 5;
        this.y = 300;
        this.width = 60;
        this.height = 60;
        this.directions = DIRECTIONS;
    }

    draw() {
        ctx.fillStyle = "Black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

document.addEventListener("keydown", function (event) {
    if (event.keyCode === ARROW_LEFT) {
        alert("Test");
    }
});

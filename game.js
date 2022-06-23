class Game {
    constructor() {
        this.player = new Player();
        this.enemy = new Enemies();
        this.bullets = new Bullets();
        this.obstacles = [];
    }

    play() {
        this.player.draw();
        this.bullets.draw();
        this.player.move();
        this.bullets.move();
        this.enemy.draw();

        if (frameCount % 75 === 0) {
            // if (frameCount % 180 === 0) {
            this.obstacles.push(new Obstacle());
        }

        // in here we clear every obstacle that is no longer visible.
        this.obstacles = this.obstacles.filter((obstacle) => {
            // because we are calling the methods, things still happen (like drawing the obstacle).
            // even if this is not directly the responsability of the current filter method, we can still, effectively, draw the obstacles
            obstacle.drawObstacle();

            return obstacle.x >= -obstacle.width;
        });
    }

    playerAndEnemyColliding() {
        if (isCollidingWithEnemy(this.player, this.enemy)) {
            gameOver();
        }
    }

    keyPressed() {
        this.player.keyPressed();
        //shooting bullets with space button
        if (keyIsDown(SPACEBAR)) {
            let bullet = new Bullets(
                playerHorizontalDirection,
                playerVerticalDirection + 10
            );
            bullets.push(bullet);
        }
    }

    bulletsShooting() {
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].draw();
            bullets[i].move();
        }
    }

    //Collision Detection with bullet and enemy still not working
    bulletAndEnemyColliding() {
        if (isCollidingWithEnemy(this.bullets, this.enemy)) {
            gameOver();
        }
    }
}

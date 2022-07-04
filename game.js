class Game {
    constructor() {
        this.player = new Player(0, canvasHeight / 2);
        this.background = new Background();
        this.obstacles = [];
        this.explosions = [];
        this.techs = [];
    }

    preload() {
        this.player.preload();
        this.background.preload();
        obstaclesimage = loadImage("images/asteroid_02.png");
        bulletImage = loadImage("images/bullet_blaster_big_single.png");
        explosionImage = loadImage("images/VRwF.gif");
        techsImage = loadImage("images/Branson.png");
    }

    play() {
        this.background.drawBackground();
        this.player.draw();

        // this.bullets.draw();
        this.player.move();
        // this.bullets.move();

        if (frameCount % 75 === 0) {
            // if (frameCount % 180 === 0) {
            this.obstacles.push(new Obstacle(obstaclesimage));
        }
        if (frameCount % 360 === 0) {
            // if (frameCount % 180 === 0) {
            this.techs.push(new Techs(techsImage));
        }

        this.explosions = this.explosions.filter((explosion) => {
            return explosion.draw();
        });

        // in here we clear every obstacle that is no longer visible.
        this.obstacles = this.obstacles.filter((obstacle) => {
            // because we are calling the methods, things still happen (like drawing the obstacle).
            // even if this is not directly the responsability of the current filter method, we can still, effectively, draw the obstacles
            obstacle.drawObstacle();

            return obstacle.x >= -obstacle.width;
        });

        this.techs = this.techs.filter((tech) => {
            // because we are calling the methods, things still happen (like drawing the obstacle).
            // even if this is not directly the responsability of the current filter method, we can still, effectively, draw the obstacles
            tech.drawTechs();

            return tech.x >= -tech.width;
        });
    }

    keyPressed() {
        this.player.keyPressed();
        //shooting bullets with space button
        if (keyIsDown(SPACEBAR) && bulletsRegulator == 0) {
            bulletsRegulator = 40;

            let bullet = new Bullets(
                playerHorizontalDirection,
                playerVerticalDirection + 10,
                bulletImage
            );
            bullets.push(bullet);
        }
        if (bulletsRegulator != 0) {
            bulletsRegulator--;
        }
    }

    bulletsShooting() {
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].draw();
            bullets[i].move();
            if (bullets[i].x > canvasWidth) {
                bullets.splice(i, 1);
            }
        }
    }

    //Collision Detection with player and obstacle
    bulletAndEnemyColliding() {
        for (let i = 0; i < this.obstacles.length; i++) {
            if (isCollidingWithEnemy(this.player, this.obstacles[i])) {
                gameOver();
            }
        }
    }

    //Collision Detection with bullet and onstacle
    bulletAndObstacleColliding() {
        for (let i = 0; i < bullets.length; i++)
            for (let y = 0; y < this.obstacles.length; y++) {
                if (isCollidingWithEnemy(bullets[i], this.obstacles[y])) {
                    var explosion = new Explosions(
                        bullets[i].x,
                        bullets[i].y - 100,
                        explosionImage
                    );
                    this.explosions.push(explosion);

                    score++;
                    anzeigeSPAN.innerHTML = score;
                    this.obstacles.splice(y, 1);
                    bullets.splice(i, 1);
                    break;
                }
            }
    }
}

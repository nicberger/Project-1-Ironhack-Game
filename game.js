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
        //Images
        asteroidsImageArray = [
            loadImage("images/asteroid_01.png"),
            loadImage("images/asteroid_02.png"),
            loadImage("images/asteroid_03.png"),
            loadImage("images/asteroid_04.png"),
            loadImage("images/asteroid_05.png"),
            loadImage("images/asteroid_06.png"),
            loadImage("images/asteroid_07.png"),
            loadImage("images/asteroid_08.png"),
            loadImage("images/asteroid_09.png"),
            loadImage("images/asteroid_10.png"),
            loadImage("images/asteroid_11.png"),
            loadImage("images/asteroid_12.png"),
            loadImage("images/asteroid_13.png"),
        ];
        bulletImage = loadImage("images/bullet_blaster_big_single.png");
        teleporterImage = loadImage("images/teleportBullet.png");
        explosionImage = loadImage("images/VRwF.gif");
        teleportExplosionImage = loadImage("images/teleportExplosion.gif");
        techsImageArray = [
            loadImage("images/Musk.png"),
            loadImage("images/Branson.png"),
            loadImage("images/Bezos.png"),
        ];
        //Sounds
        explosionSound = loadSound("sounds/explosionSound.wav");
        bulletShootingSound = loadSound("sounds/bulletFireSound.wav");
        teleporterShotSound = loadSound("sounds/teleporterShotSound.mp3");
        telporterImpactSound = loadSound("sounds/teleporterImpact.wav");
        muskAliensSound = loadSound("sounds/MuskAliens.wav");
        explosionGameOverSound = loadSound("sounds/explosionGameOver.mp3");
    }

    play() {
        this.background.drawBackground();
        this.player.draw();
        this.player.move();

        if (frameCount % 75 === 0) {
            this.obstacles.push(
                new Obstacle(asteroidsImageArray[getRandomNumber(0, 13)])
            );
        }
        if (frameCount % (360 * getRandomNumber(1, 2)) === 0) {
            this.techs.push(new Techs(techsImageArray[getRandomNumber(0, 3)]));
        }

        this.explosions = this.explosions.filter((explosion) => {
            return explosion.draw();
        });

        // In here we clear every asteroid and tech that is no longer visible in the canvas
        this.obstacles = this.obstacles.filter((obstacle) => {
            // because we are calling the methods, things still happen (like drawing the obstacle).
            // even if this is not directly the responsability of the current filter method, we can still, effectively, draw the o
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
        //Shooting bullets with SPACEBAR
        if (keyIsDown(SPACEBAR) && bulletsRegulator == 0) {
            bulletsRegulator = 40;

            let bullet = new Bullets(
                playerHorizontalDirection + 80,
                playerVerticalDirection + 30,
                bulletImage
            );
            bulletShootingSound.play();
            bulletsArray.push(bullet);
        }
        if (bulletsRegulator != 0) {
            bulletsRegulator--;
        }
        //shooting teleporter with B Key
        if (keyIsDown(KEYB) && teleporterRegulator == 0) {
            teleporterRegulator = 40;

            let teleporter = new Teleporter(
                playerHorizontalDirection + 80,
                playerVerticalDirection + 20,
                teleporterImage
            );
            teleporterShotSound.play();
            teleporterArray.push(teleporter);
        }
        if (teleporterRegulator != 0) {
            teleporterRegulator--;
        }
    }

    bulletsShooting() {
        for (let i = 0; i < bulletsArray.length; i++) {
            bulletsArray[i].draw();
            bulletsArray[i].move();
            if (bulletsArray[i].x > canvasWidth) {
                bulletsArray.splice(i, 1);
            }
        }
    }

    teleporterShooting() {
        for (let i = 0; i < teleporterArray.length; i++) {
            teleporterArray[i].draw();
            teleporterArray[i].move();
            if (teleporterArray[i].x > canvasWidth) {
                teleporterArray.splice(i, 1);
            }
        }
    }

    //Collision Detection: Player hitting asteroid
    playerObstacleCollision() {
        for (let i = 0; i < this.obstacles.length; i++) {
            if (isCollidingWithEnemy(this.player, this.obstacles[i])) {
                let explosion = new Explosions(
                    this.player.x,
                    this.player.y,
                    explosionImage
                );
                this.explosions.push(explosion);
                if (!explosionGameOverSound.isPlaying()) {
                    explosionGameOverSound.play();
                    explosionGameOverSound.setVolume(0.5);
                }
                gameOver();
            }
        }
    }

    //Collision Detection: Player hitting techguy
    playerTechGuyCollision() {
        for (let i = 0; i < this.techs.length; i++) {
            if (isCollidingWithEnemy(this.player, this.techs[i])) {
                let explosion = new Explosions(
                    this.player.x,
                    this.player.y,
                    explosionImage
                );
                this.explosions.push(explosion);
                if (!explosionGameOverSound.isPlaying()) {
                    explosionGameOverSound.play();
                    explosionGameOverSound.setVolume(0.5);
                }
                gameOver();
            }
        }
    }

    //Collision Detection: Bullet hitting asteroid
    bulletObstacleCollision() {
        for (let i = 0; i < bulletsArray.length; i++)
            for (let y = 0; y < this.obstacles.length; y++) {
                if (isCollidingWithEnemy(bulletsArray[i], this.obstacles[y])) {
                    let explosion = new Explosions(
                        bulletsArray[i].x + 20,
                        bulletsArray[i].y - 40,
                        explosionImage
                    );
                    this.explosions.push(explosion);
                    explosionSound.play();
                    score++;
                    this.obstacles.splice(y, 1);
                    bulletsArray.splice(i, 1);
                    break;
                }
            }
    }

    //Collision Detection: Bullet hitting techguy
    bulletTechGuyCollision() {
        for (let i = 0; i < bulletsArray.length; i++)
            for (let y = 0; y < this.techs.length; y++) {
                if (isCollidingWithEnemy(bulletsArray[i], this.techs[y])) {
                    let explosion = new Explosions(
                        bulletsArray[i].x,
                        bulletsArray[i].y - 100,
                        explosionImage
                    );
                    this.explosions.push(explosion);
                    if (!explosionGameOverSound.isPlaying()) {
                        explosionGameOverSound.play();
                        explosionGameOverSound.setVolume(0.5);
                    }
                    this.obstacles.splice(y, 1);
                    bulletsArray.splice(i, 1);
                    gameOver();
                }
            }
    }

    //Collision Detection: Teleporter hitting techguy
    teleporterTechguyCollision() {
        for (let i = 0; i < teleporterArray.length; i++)
            for (let y = 0; y < this.techs.length; y++) {
                if (isCollidingWithEnemy(teleporterArray[i], this.techs[y])) {
                    let explosion = new Explosions(
                        teleporterArray[i].x + 20,
                        teleporterArray[i].y - 40,
                        teleportExplosionImage
                    );
                    telporterImpactSound.play();
                    this.explosions.push(explosion);

                    score++;
                    this.techs.splice(y, 1);
                    teleporterArray.splice(i, 1);
                    break;
                }
            }
    }
}

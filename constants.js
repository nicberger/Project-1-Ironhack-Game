//Canvas measurements
const canvasWidth = 1000;
const canvasHeight = 600;

//Keycodes
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_UP = 38;
const PLAYER_MOVEMENT = 50;
const SPACEBAR = 32;
const KEYB = 66;

//rect(x-value, y-value, width value, height value)
let x = 0;
let y = 0;

//directions player rect (x-value, y-value, width value, height value)
let playerVerticalDirection = canvasHeight / 2;
let playerHorizontalDirection = 0;

//Array for Bullets, Teleporter and Enemies
let bulletsArray = [];
let enemies = [];
let teleporterArray = [];

let bulletsRegulator = 0;
let teleporterRegulator = 0;

//Score
let score = 0;

//Images classes
let asteroidsImageArray = [];
let bulletImage;
let teleporterImage;
let explosionImage;
let teleportExplosionImage;
let techsImageArray = [];

// functions and formulas
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Mode and button variables in main.js and gameover.js
let gameMode = 0;
let button;
let button2;
let backgroundmusicPlayButton;

//Background images
let bg;
let bgGameover;
let muskStartScreenImage;

//Audio
let explosionSound;
let bulletShootingSound;
let teleporterShotSound;
let muskAliensSound;
let introSong;

//Audio Features
let slider;

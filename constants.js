//Canvas measurements
const canvasWidth = 1000;
const canvasHeight = 600;

//Keycodes
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_UP = 38;
const PLAYER_MOVEMENT = 50;

//rect(x-value, y-value, width value, height value)
let x = 0;
let y = 0;

//directions player rect (x-value, y-value, width value, height value)
let playerVerticalDirection = 0;
let playerHorizontalDirection = 0;

//Array for Bullets and Enemies
let bullets = [];
let enemies = [];

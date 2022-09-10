// HTML elements
const board = document.getElementById("board");
const scoreBoard = document.getElementById("scoreBoard");
const startButton = document.getElementById("start");
const gameOver = document.getElementById("gameOver");

// Game Settings

const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2,
};

const directions = {
  arrowUp: -10,
  arrowDown: 10,
  arrowRight: 1,
  arrowLeft: -1,
};

// Game Variables

let snake;
let score;
let direction;
let boardSquare;
let emptySquare;
let moveInterval;

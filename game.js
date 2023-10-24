import { Gameboard } from "./models/gameboard.js";
import { Ball } from "./models/ball.js";
import { drawGameBoard, drawBall, drawPlayer } from "./service/draw.js";
import { initBtns } from "./service/inits.js";
import { Player } from "./models/player.js";
let isGameOver = false;

export let gameboard = new Gameboard(1200, 800);
export let ball = new Ball(gameboard.width / 2, gameboard.height / 2, 25);
export let player = new Player(gameboard.width - 20, gameboard.height / 2);

function renderGame() {
    drawGameBoard(gameboard.width, gameboard.height);
    drawBall(ball.x, ball.y, ball.size);
    drawPlayer(player.x, player.y, player.width, player.height);
}

function gameLoop() {
    renderGame();
    requestAnimationFrame(gameLoop);
}
initBtns();
gameLoop();
renderGame();

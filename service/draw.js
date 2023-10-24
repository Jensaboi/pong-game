const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

export function drawGameBoard(width, height) {
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, width, height);
}

export function drawBall(x, y, size) {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, size, size);
}

export function drawPlayer(x, y, width, height) {
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, width, height);
}

export function drawComputerPlayer() {}

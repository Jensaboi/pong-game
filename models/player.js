export class Player {
    width = 20;
    height = 120;
    speed = 10;
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
    }

    moveUp() {
        this.y -= this.speed;
    }
    moveDown() {
        this.y += this.speed;
    }
}

import { player } from "../game.js";
export function initBtns() {
    document.addEventListener("keypress", (event) => {
        if (event.key === "w" || event.key === "W") {
            player.moveUp();
        } else if (event.key === "s" || event.key === "S") {
            player.moveDown();
        }
    });
}

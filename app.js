import { makeIcon } from "./modules/iconCreator.js"
import { hasWon, displayGameOverMessage, updatePos, drawWinningLine, getWinningPos } from "./modules/gameLogic.js"


const main = (event) => {
    const playerTile = makeIcon(event)
    container.appendChild(playerTile)
    updatePos()

    if (hasWon()) {
        container.removeEventListener("click", main)
        drawWinningLine(getWinningPos())
        displayGameOverMessage(hasWon())
    }
}

const container = document.getElementById("box-container")
container.addEventListener("click", main)

import { makeIcon } from "./modules/iconCreator.js"
import { getIsRunning, isWinner } from "./modules/gameLogic.js"


const main = (event) => {
    const playerTile = makeIcon(event)
    container.appendChild(playerTile)
    console.log(isWinner())

    if (!getIsRunning()) {
        console.log("Game Over")
        container.removeEventListener("click", main)
    }
}

const container = document.getElementById("box-container")
container.addEventListener("click", main)

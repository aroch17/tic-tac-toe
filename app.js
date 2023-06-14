import { makeIcon } from "./modules/iconCreator.js"
import { isWinner } from "./modules/gameLogic.js"

const container = document.getElementById("box-container")

container.addEventListener("click", (event) => {
    const playerTile = makeIcon(event)
    container.appendChild(playerTile)
    isWinner()
})

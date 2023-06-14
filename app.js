import { makeIcon } from "./modules/iconCreator.js"

document.addEventListener("click", (event) => {
    const container = document.getElementById("box-container")
    const playerTile = makeIcon(event)
    container.appendChild(playerTile)
})

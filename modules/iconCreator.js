import { classSelector } from "./classSelector.js"

let is_cross = true
export const makeIcon = (event) => {
    const playerTile = document.createElement("img")
    const iconType = is_cross ? "cross" : "circle"
    const iconClass = classSelector(event)

    playerTile.setAttribute("src", "assets/" + iconType + "-ttt.png")
    playerTile.setAttribute("alt", "Player Icon")
    playerTile.setAttribute("class", `icon box ${iconClass} ${iconType}`)
    playerTile.style.objectFit = "contain"

    is_cross = !is_cross
    return playerTile
}
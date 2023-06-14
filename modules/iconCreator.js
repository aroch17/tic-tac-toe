import { classSelector } from "./classSelector.js"

let isCross = true
let iconType = ""
export const makeIcon = (event) => {
    const playerTile = document.createElement("img")
    iconType = isCross ? "cross" : "circle"
    const iconClass = classSelector(event)

    playerTile.setAttribute("src", "assets/" + iconType + "-ttt.png")
    playerTile.setAttribute("alt", "Player Icon")
    playerTile.setAttribute("class", `icon box ${iconClass} ${iconType}`)
    playerTile.style.objectFit = "contain"

    isCross = !isCross
    return playerTile
}

export const getIsCross = () => {
    return isCross
}

export const getIconType = () => {
    return iconType
}
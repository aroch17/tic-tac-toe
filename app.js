corPoints = [] // TODO: make points where icons are perfectly centred


is_cross = true
document.addEventListener("click", (event) => {
    const playerTile = document.createElement("img")

    const iconType = is_cross ? "cross" : "circle"
    playerTile.setAttribute("src", "assets/" + iconType + "-ttt.png")
    is_cross = !is_cross

    playerTile.setAttribute("alt", "Player Icon")
    playerTile.setAttribute("class", "icon")

    // the negative values account for the offset
    const iconXCor = event.clientX - 65;
    const iconYCor = event.clientY - 137;

    playerTile.style.left = iconXCor + "px";
    playerTile.style.top = iconYCor + "px";

    const container = document.getElementById("main-container")
    container.appendChild(playerTile)
})

corSelector = (x, y) => {
    // TODO: make
}
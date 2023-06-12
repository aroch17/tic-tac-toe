document.addEventListener("click", (event) => {
    const playerTile = document.createElement("img")
    playerTile.setAttribute("src", "assets/cross-ttt.png")
    playerTile.setAttribute("alt", "Player Icon")
    playerTile.setAttribute("class", "icon")

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // the negative values account for the offset
    playerTile.style.left = (mouseX-65) + "px";
    playerTile.style.top = (mouseY-137) + "px";

    const container = document.getElementById("main-container")
    container.appendChild(playerTile)
})
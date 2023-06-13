// corPoints = [[x, y], [x2, y2]] // TODO: make points where icons are perfectly centred

is_cross = true
document.addEventListener("click", (event) => {
    const container = document.getElementById("main-container")

    if (container.contains(event.target)) {
        const playerTile = document.createElement("img")

        const iconType = is_cross ? "cross" : "circle"
        playerTile.setAttribute("src", "assets/" + iconType + "-ttt.png")
        is_cross = !is_cross

        playerTile.setAttribute("alt", "Player Icon")
        playerTile.setAttribute("class", "icon")

        // the negative values account for the offset - dependent on h1 positioning and margin
        // const xCor = event.clientX - 65;
        const xCor = event.clientX - 581;
        // const yCor = event.clientY - 137;
        const yCor = event.clientY - 145;

        // const iconXCor = corSelector(xCor, yCor)[0]
        // const iconYCor = corSelector(xCor, yCor)[1]

        playerTile.style.left = xCor + "px";
        playerTile.style.top = yCor + "px";
        container.appendChild(playerTile)
    }
    console.log(event.clientX)
    console.log(event.clientY)
})

// corSelector = (x, y) => {
//     // TODO: make an algorithm to select the cor from 'corPoints' which is the least distance from (x, y)
// }
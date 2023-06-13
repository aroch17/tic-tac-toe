corPoints = {
    "00": [610, 190],
    "01": [745, 190],
    "02": [880, 190],
    "10": [615, 320],
    "11": [747, 320],
    "12": [880, 320],
    "20": [610, 450],
    "21": [745, 450],
    "22": [880, 450]
}

is_cross = true
makeIcon = (iconCors) => {
    const playerTile = document.createElement("img")
    const iconType = is_cross ? "cross" : "circle"

    playerTile.setAttribute("src", "assets/" + iconType + "-ttt.png")
    playerTile.setAttribute("alt", "Player Icon")
    playerTile.setAttribute("class", "icon")

    playerTile.style.left = iconCors[0] - 581 + "px";
    playerTile.style.top = iconCors[1] - 145 + "px";

    is_cross = !is_cross

    return playerTile
}

corSelector = (event) => {
    const boxElements = [
        ["00", "01", "02"],
        ["10", "11", "12"],
        ["20", "21", "22"]
    ];

    for (const row of boxElements) {
        for (const boxId of row) {
            const boxElement = document.getElementById(boxId);
            if (boxElement.contains(event.target)) {
                return corPoints[boxId];
            }
        }
    }
    console.log("Invalid Click");
}

document.addEventListener("click", (event) => {
    const container = document.getElementById("main-container")
    iconCors = corSelector(event)
    const playerTile = makeIcon(iconCors)
    container.appendChild(playerTile)
})

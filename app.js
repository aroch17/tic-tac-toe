corClasses = {
    "00": "one",
    "01": "two",
    "02": "three",
    "10": "four",
    "11": "five",
    "12": "six",
    "20": "seven",
    "21": "eight",
    "22": "nine"
}

classSelector = (event) => {
    const boxElements = [
        ["00", "01", "02"],
        ["10", "11", "12"],
        ["20", "21", "22"]
    ];

    for (const row of boxElements) {
        for (const boxId of row) {
            const boxElement = document.getElementById(boxId);
            if (boxElement.contains(event.target)) {
                return corClasses[boxId];
            }
        }
    }
    throw new Error("Invalid Click");
}

is_cross = true
makeIcon = (event) => {
    const playerTile = document.createElement("img")
    const iconType = is_cross ? "cross" : "circle"
    iconClass = classSelector(event)

    playerTile.setAttribute("src", "assets/" + iconType + "-ttt.png")
    playerTile.setAttribute("alt", "Player Icon")
    playerTile.setAttribute("class", `icon box ${iconClass}`)
    playerTile.style.objectFit = "contain"

    is_cross = !is_cross
    return playerTile
}

document.addEventListener("click", (event) => {
    const container = document.getElementById("box-container")
    const playerTile = makeIcon(event)
    container.appendChild(playerTile)
})

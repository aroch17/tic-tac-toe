import { getIsCross, getIconType } from "./iconCreator.js"

const numberDict = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
}

const allWinningPos = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
]

let cross_pos = []
let circle_pos = []

const addToArrayAndRemoveDup = (pos, item) => {
    pos.push(item)
    // removes duplicates in array
    pos = [...new Set(pos)]
    return pos
}

export const updatePos = () => {
    const icons = document.getElementsByClassName(getIconType())
    for (let i = 0; i < icons.length; i++) {
        let posClassName = icons[i].classList[1]
        // we use ! here as this function is called after iconCreator and iconCreator inverts is_cross
        if (!getIsCross()) {
            cross_pos = addToArrayAndRemoveDup(cross_pos, numberDict[posClassName])
        } else {
            circle_pos = addToArrayAndRemoveDup(circle_pos, numberDict[posClassName])
        }
    }
}

const allFilled = () => {
    return (cross_pos.length + circle_pos.length == 9)
}

export const hasWon = () => {
    for (let i = 0; i < allWinningPos.length; i++) {
        // To check membership of winning pos in board pos
        // [3, 6, 9].every(element => [9, 6, 7, 3].includes(element) -> true
        if (cross_pos.length >= 3 && allWinningPos[i].every(element => cross_pos.includes(element))) {
            return "Cross wins!"
        } else if (circle_pos.length >= 3 && allWinningPos[i].every(element => circle_pos.includes(element))) {
            return "Circle wins!"
        } else continue
    }
    if (allFilled()) {
        return "Draw!"
    }
}

export const displayGameOverMessage = (msg) => {
    if (msg) {
        const imgContainer = document.getElementById("img-container")
        const message = document.createElement("h2")
        message.textContent = msg

        imgContainer.appendChild(message)
    }
}